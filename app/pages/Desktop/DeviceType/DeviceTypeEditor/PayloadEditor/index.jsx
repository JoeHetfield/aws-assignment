import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Formik, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';

import Slide from 'components/Slide';
import Typography from 'components/Typography';
import LoadingButton from 'components/LoadingButton';
import { TextField, SelectField } from 'components/Form';

import UuidTemplate from './ValueTemplates/UuidTemplate';
import DecayTemplate from './ValueTemplates/DecayTemplate';
import FloatTemplate from './ValueTemplates/FloatTemplate';
import StringTemplate from './ValueTemplates/StringTemplate';
import ShortidTemplate from './ValueTemplates/ShortidTemplate';
import BooleanTemplate from './ValueTemplates/BooleanTemplate';
import IntegerTemplate from './ValueTemplates/IntegerTemplate';
import PickOneTemplate from './ValueTemplates/PickOneTemplate';
import LocationTemplate from './ValueTemplates/LocationTemplate';
import TimestampTemplate from './ValueTemplates/TimestampTemplate';
import SinusoidalTemplate from './ValueTemplates/SinusoidalTemplate';

import { DeviceType as msgs, Common as commonMsgs } from 'messages';

const useStyles = makeStyles(({ spacing }) => ({
  form: {
    padding: spacing(1, 3),
  },
}));

const PayloadEditor = ({
  open,
  payload,
  addPayload,
  closeEditor,
}) => {
  const classes = useStyles();

  const defaultValue = {
    _id_: shortid.generate(),
    name: shortid.generate(),
    type: 'id',
  };

  const _addPaload = (params) => {
    addPayload('spec.payload', [...payload, params]);
    closeEditor();
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      scroll="body"
      onClose={closeEditor}
      TransitionComponent={Slide.Up}
      classes={{
        paper: classes.paper,
      }}
    >

      <Formik
        enableReinitialize
        onSubmit={_addPaload}
        // validate={validate}
        initialValues={defaultValue}
      >
        {({
          values,
          handleSubmit,
        }) => (
          <form
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            className={classes.form}
          >

            <Box
              my={2}
              display="flex"
              flexDirection="column"
            >
              <Typography
                variant="h6"
                message={msgs.nonu.messageAttribute}
              />
            </Box>

            <Field
              label={msgs.nonu.attributeName}
              required
              fullWidth
              name="name"
              margin="normal"
              variant="outlined"
              component={TextField}
              helperText={msgs.phrase.helperAttributeName}
              className="inputAttributeName"
            />

            <Field
              label={msgs.nonu.attributeDataType}
              required
              fullWidth
              name="type"
              margin="normal"
              variant="outlined"
              component={SelectField}
              options={[
                { label: 'Device ID', value: 'id' },
                { label: 'Boolean', value: 'bool' },
                { label: 'Decay', value: 'decay' },
                { label: 'Float', value: 'float' },
                { label: 'Integer', value: 'int' },
                { label: 'Localtion', value: 'location' },
                { label: 'Object', value: 'object' },
                { label: 'Stirng', value: 'string' },
                { label: 'Sinusoidal', value: 'sinusoidal' },
                { label: 'Uniqe Identifier', value: 'uuid' },
                { label: 'Uniqe Short Identifier', value: 'shortid' },
                { label: 'UTC Timestamp', value: 'timestamp' },
                { label: 'Pick one from array', value: 'pickOne' },
              ]}
              helperText={msgs.phrase.helperAttributeDataType}
            />

            {(() => {
              switch (values.type) {
                case 'bool':
                  return <BooleanTemplate />;
                case 'decay':
                  return <DecayTemplate />;
                case 'float':
                  return <FloatTemplate />;
                case 'int':
                  return <IntegerTemplate />;
                case 'location':
                  return <LocationTemplate />;
                case 'string':
                  return <StringTemplate />;
                case 'sinusoidal':
                  return <SinusoidalTemplate />;
                case 'uuid':
                  return <UuidTemplate />;
                case 'shortid':
                  return <ShortidTemplate />;
                case 'timestamp':
                  return <TimestampTemplate />;
                case 'pickOne':
                  return <PickOneTemplate />;
                default:
                  return null;
              }
            })()}

            <Box
              display="flex"
              justifyContent="flex-end"
            >

              <LoadingButton
                type="submit"
                size="large"
                label={commonMsgs.verb.save}
                color="secondary"
                buttonClass="btnSaveAttribute"
              />

              <LoadingButton
                size="large"
                label={commonMsgs.verb.cancel}
                onClick={closeEditor}
              />

            </Box>

          </form>
        )}
      </Formik>

    </Dialog>
  );
};

PayloadEditor.propTypes = {
  open: PropTypes.bool.isRequired,
  payload: PropTypes.object.isRequired,
  addPayload: PropTypes.func.isRequired,
  closeEditor: PropTypes.func.isRequired,
};

export default PayloadEditor;
