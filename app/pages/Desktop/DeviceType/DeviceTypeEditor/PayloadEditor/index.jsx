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

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  toolbar: {
    height: spacing(10),
  },
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
    name: shortid.generate(),
    type: 'id',
  };

  const _addPaload = (params) => {
    addPayload('spec.payload', [...payload, params]);
    closeEditor();
  };

  return (
    <Dialog
      open={open}
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
                message="Message Attribute"
              />
            </Box>

            <Field
              label="Attribute name"
              required
              fullWidth
              name="name"
              margin="normal"
              variant="outlined"
              component={TextField}
              helperText="Name of the message attribute."
            />

            <Field
              label="Attribute data type"
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
              helperText="Data type of the message attribute."
            />

            <Box
              display="flex"
              justifyContent="flex-end"
            >

              <LoadingButton
                type="submit"
                size="large"
                label="save"
              />

              <LoadingButton
                size="large"
                label="cancel"
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
