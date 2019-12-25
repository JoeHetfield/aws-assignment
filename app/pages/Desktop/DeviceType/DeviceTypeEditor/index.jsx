/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Formik, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Typography from 'components/Typography';
import LoadingButton from 'components/LoadingButton';
import { TextField, SelectField } from 'components/Form';

import { masks } from 'utils';
import { DeviceType } from 'actions';

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
    const errors = {
      spec: {},
    };

    if (!name) {
      errors.name = 'Please enter the name of the Device Type';
    }

    if (!topic) {
      errors.spec.topic = 'Please enter the topic for the Device Type';
    }

    if (!duration) {
      errors.spec.duration = 'Please enter the duration of the Device Type';
    } else if (duration < 60000) {
      errors.spec.duration = 'Value of the duration must equal or greater than 60000';
    }

    if (!interval) {
      errors.spec.interval = 'Please enter the interval of the Device Type';
    } else if (interval < 60000) {
      errors.spec.interval = 'Value of the interval must equal or greater than 1000';
    }

    return errors;
  };

  const update = (params, {
    setSubmitting,
    setErrors,
    resetForm,
  }) => {
    if (!params.typeId) {
      // params.typeId = shortid.generate();
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
                message="Device Type Definition"
              />

              <Typography
                color="textSecondary"
                variant="caption"
                message="Customize how device data of this customized type is sent to AWS IoT."
              />
            </Box>

            <Field
              id="inputDeviceTypeName"
              label="Device Type Name"
              required
              fullWidth
              name="name"
              margin="normal"
              variant="outlined"
              disabled={loading || isSubmitting || deviceType.typeId}
              component={TextField}
              helperText="The common name of the device type."
            />

            <Field
              label="Visibility"
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
              helperText={'The visibility of device type. Selecting "Shared" allows members to use this device type in simulations.'}
            />

            <Field
              id="inputDataTopic"
              label="Data Topic"
              required
              fullWidth
              name="spec.topic"
              margin="normal"
              variant="outlined"
              disabled={loading || isSubmitting}
              component={TextField}
              helperText="The topic where individual sensor data is sent."
            />

            <Field
              id="inputDuration"
              label="Data Transmission Duration"
              required
              fullWidth
              name="spec.duration"
              mask={masks.quantity}
              margin="normal"
              variant="outlined"
              disabled={loading || isSubmitting}
              component={TextField}
              helperText="How long the device will simulate sending data to the defined data topic (milliseconds) [must be >= 60000]."
            />

            <Field
              id="inputInterval"
              label="Data Transmission Interval"
              required
              fullWidth
              name="spec.interval"
              mask={masks.quantity}
              margin="normal"
              variant="outlined"
              disabled={loading || isSubmitting}
              component={TextField}
              helperText="How often devices will send data during a simulation (milliseconds) [must be >= 1000]."
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
                label="save"
                color="secondary"
                isLoading={isSubmitting}
                buttonClass="btnSaveDeviceType"
              />

              <LoadingButton
                id="btnCancel"
                size="large"
                label="cancel"
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
