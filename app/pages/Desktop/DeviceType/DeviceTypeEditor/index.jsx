/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { FormattedTime } from 'react-intl';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Formik, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Toolbar from '@material-ui/core/Toolbar';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import RefreshIcon from '@material-ui/icons/Refresh';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

import Table from 'components/Table';
import Button from 'components/Button';
import { TextField, SelectField } from 'components/Form';
import Typography from 'components/Typography';
import LoadingButton from 'components/LoadingButton';

import { DeviceType } from 'actions';
import { masks, formatter } from 'utils';

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

  const [deviceType, setDeviceType] = useState({});
  const [loading, setLoading] = useState(false);

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

  const update = (params, {
    setSubmitting,
    setErrors,
    resetForm,
  }) => DeviceType
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

  return (
    <Paper className={classes.root}>

      <Formik
        enableReinitialize
        onSubmit={update}
        // validate={validate}
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
              options={[{
                label: 'public', value: 'public',
              }, {
                label: 'private', value: 'private',
              }]}
              helperText={'The visibility of device type. Selecting "Shared" allows members to use this device type in simulations.'}
            />

            <Field
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

            <Box
              my={2}
              display="flex"
              flexDirection="column"
            >
              <Typography
                message="Message Payload"
              />

              <Typography
                color="textSecondary"
                variant="caption"
                message="Define the message payload that will be simulated for the device."
              />
            </Box>

            <Box
              my={2}
              display="flex"
              flexDirection="column"
            >
              <Typography
                message="Sample Message Payload"
              />

              <pre>
                <Typography
                  variant="caption"
                  message={JSON.stringify(values.spec.payload, null, 2)}
                />
              </pre>
            </Box>

            <Box
              display="flex"
              justifyContent="flex-end"
            >

              <LoadingButton
                type="submit"
                size="large"
                isLoading={isSubmitting}
                label="save"
              />

              <LoadingButton
                size="large"
                label="cancel"
                disabled={isSubmitting}
                to="/deviceType"
                component={Link}
              />

            </Box>

          </form>
        )}
      </Formik>

    </Paper>
  );
};

export default DeviceTypeEditor;
