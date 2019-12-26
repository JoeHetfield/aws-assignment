/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Link from 'components/Link';
import Button from 'components/Button';
import Typography from 'components/Typography';

import Layout from '../components/ContentLayout';

import { Home as msgs, Common as commonMsgs } from 'messages';

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    minWidth: 400,
    // height: '100%',
    // minHeight: '100%',
    padding: spacing(3, 4),
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>

      <Box
        px={3}
        py={4}
        color="common.white"
        bgcolor="primary.main"
        display="flex"
        justifyContent="space-between"
      >

        <Box>

          <Typography
            gutterBottom
            variant="subtitle"
            message={msgs.phrase.simulation}
          />

          <Typography
            gutterBottom
            variant="h3"
            message={msgs.phrase.iotSimulator}
          />

          <Typography
            gutterBottom
            variant="h5"
            message={msgs.phrase.subtitle}
          />

          <Typography
            variant="body1"
            message={msgs.phrase.explaination}
          />

        </Box>

        <Box width={32} />

        <Paper
          className={classes.paper}
        >
          <Typography
            gutterBottom
            variant="h6"
            message={commonMsgs.nonu.myDevice}
          />

          <Typography
            gutterBottom
            variant="h4"
            message={commonMsgs.phrase.totalDevices}
          />

          <Box
            display="flex"
          >

            <Button
              variant="contained"
              color="secondary"
              label={msgs.phrase.createDeviceType}
            />

            <Box width={16} />

            <Button
              variant="contained"
              color="secondary"
              label={msgs.phrase.createDevice}
            />

          </Box>

        </Paper>

      </Box>

      <Box
        p={3}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >

        <Box
          flex={1}
        >

          <Paper
            className={classes.paper}
          >
            <Typography
              gutterBottom
              variant="h6"
              message={msgs.phrase.about}
            />

            <img alt="start" width="100%" src="/assets/img/iot-ds.png" />
          </Paper>

          <Box height={32} />

          <Paper
            className={classes.paper}
          >
            <Typography
              gutterBottom
              variant="h6"
              message={msgs.phrase.start}
            />

            <img alt="start" width="100%" src="/assets/img/iot-ds.png" />
          </Paper>

        </Box>

        <Box width={32} />

        <Paper
          className={classes.paper}
        >
          <Typography
            gutterBottom
            variant="h6"
            message={msgs.nonu.documentation}
          />

          <Link
            href="#"
            gutterBottom
            variant="body1"
            label={msgs.nonu.overview}
          />

          <Link
            href="#"
            gutterBottom
            variant="body1"
            label={msgs.nonu.guide}
          />

          <Link
            href="#"
            gutterBottom
            variant="body1"
            label={msgs.nonu.repository}
          />
        </Paper>

      </Box>

    </Layout>
  );
};

export default Home;
