/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Formik, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import assocPath from 'ramda/es/assocPath';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Typography from 'components/Typography';
import LoadingButton from 'components/LoadingButton';
import { TextField, SelectField } from 'components/Form';

import { masks } from 'utils';
import { DeviceType } from 'actions';
import { DeviceType as msgs, Common as commonMsgs } from 'messages';

import PayloadList from './PayloadList';
import PayloadSample from './PayloadSample';
import PayloadEditor from './PayloadEditor';

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

const DeviceTypeEditor = () => {
  const classes = useStyles();
  const history = useHistory();
  const { typeId } = useParams();

  const [loading, setLoading] = useState(false);
  const [deviceType, setDeviceType] = useState({});
  const [editorOpen, setEditorOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    DeviceType
      .load(typeId)
      .then(setDeviceType)
      .then(() => setLoading(false));
  }, []);

  const defaultValue = {
    name: '',
    visibility: 'private',
    spec: {
      topic: '/sample/topic',
      duration: 60000,
      interval: 2000,
      payload: [],
    },
  };

  const validate = ({
    name,
    spec: {
      topic,
      duration,
      interval,
    },
  }) => {
    let errors = {};

    if (!name) {
      errors.name = 'Please enter the name of the Device Type';
    }

    if (!topic) {
      errors = assocPath(['spec', 'topic'], 'Please enter the topic for the Device Type', errors);
    }

    if (!duration) {
      errors = assocPath(['spec', 'duration'], 'Please enter the duration of the Device Type', errors);
    } else if (duration < 60000) {
      errors = assocPath(['spec', 'duration'], 'Value of the duration must equal or greater than 60000', errors);
    }

    if (!interval) {
      errors = assocPath(['spec', 'interval'], 'Please enter the interval of the Device Type', errors);
    } else if (interval < 1000) {
      errors = assocPath(['spec', 'interval'], 'Value of the interval must equal or greater than 1000', errors);
    }

    return errors;
  };

  const update = (params, {
    setSubmitting,
    setErrors,
    resetForm,
  }) => {
    if (!params.typeId) {
      params.createdAt = Date.now();
    }

    params.updatedAt = Date.now();

    DeviceType
      .update(params)
      .then(() => {
        resetForm();
        setSubmitting(false);
        history.push('/deviceType');
      })
      .catch(({ msg }) => {
        setSubmitting(false);
        setErrors(msg);
      });
  };

  return (
    <Paper className={classes.root}>

      <Formik
        enableReinitialize
        onSubmit={update}
        validate={validate}
        initialValues={deviceType.typeId ? deviceType : defaultValue}
      >
        {({
          values,
          isSubmitting,
          handleSubmit,
          setFieldValue,
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
                id="lableEditorTitle"
                variant="h6"
                message={msgs.nonu.deviceTypeDefinition}
              />

              <Typography
                color="textSecondary"
                variant="caption"
                message={msgs.phrase.hintDeviceTypeDefinition}
              />
            </Box>

            <Field
              id="inputDeviceTypeName"
              label={msgs.nonu.deviceTypeName}
              required
              fullWidth
              name="name"
              margin="normal"
              variant="outlined"
              disabled={loading || isSubmitting || deviceType.typeId}
              component={TextField}
              helperText={msgs.phrase.helperDeviceTypeDefinition}
            />

            <Field
              label={msgs.nonu.visibility}
              required
              fullWidth
              name="visibility"
              margin="normal"
              variant="outlined"
              disabled={loading || isSubmitting}
              component={SelectField}
              options={[
                { label: 'public', value: 'public' },
                { label: 'private', value: 'private' },
              ]}
              helperText={msgs.phrase.helperVisibility}
            />

            <Field
              id="inputDataTopic"
              label={msgs.nonu.dataTopic}
              required
              fullWidth
              name="spec.topic"
              margin="normal"
              variant="outlined"
              disabled={loading || isSubmitting}
              component={TextField}
              helperText={msgs.phrase.helperDataTopic}
            />

            <Field
              id="inputDuration"
              label={msgs.nonu.dataTransmissionDuration}
              required
              fullWidth
              name="spec.duration"
              mask={masks.quantity}
              margin="normal"
              variant="outlined"
              disabled={loading || isSubmitting}
              component={TextField}
              helperText={msgs.phrase.helperDataTransmissionDuration}
            />

            <Field
              id="inputInterval"
              label={msgs.nonu.dataTransmissionInterval}
              required
              fullWidth
              name="spec.interval"
              mask={masks.quantity}
              margin="normal"
              variant="outlined"
              disabled={loading || isSubmitting}
              component={TextField}
              helperText={msgs.phrase.helperDataTransmissionInterval}
            />

            <PayloadList
              payload={values.spec.payload || []}
              deletePayload={setFieldValue}
              openEditor={() => setEditorOpen(true)}
            />

            <PayloadSample
              payload={values.spec.payload || []}
            />

            <PayloadEditor
              open={editorOpen}
              payload={values.spec.payload || []}
              addPayload={setFieldValue}
              closeEditor={() => setEditorOpen(false)}
            />

            <Box
              display="flex"
              justifyContent="flex-end"
            >

              <LoadingButton
                type="submit"
                size="large"
                label={commonMsgs.verb.save}
                color="secondary"
                isLoading={isSubmitting}
                buttonClass="btnSaveDeviceType"
              />

              <LoadingButton
                id="btnCancel"
                size="large"
                label={commonMsgs.verb.cancel}
                to="/deviceType"
                component={Link}
                disabled={isSubmitting}
              />

            </Box>

          </form>
        )}
      </Formik>

    </Paper>
  );
};

export default DeviceTypeEditor;
