/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Link from 'components/Link';
import Button from 'components/Button';
import Typography from 'components/Typography';

import { Home as msgs, Common as commonMsgs } from 'messages';

import Layout from '../components/ContentLayout';

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    minWidth: 400,
    padding: spacing(3, 4),
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Layout>

      {/* head hero unit */}
      <Box
        px={3}
        py={4}
        color="common.white"
        bgcolor="primary.main"
        display="flex"
        flexShrink={0}
        justifyContent="space-between"
      >

        {/* product solgan and description */}
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
            className="pageTitle"
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

        {/* My Device card */}
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
              to="/deviceType"
              component={RouterLink}
            />

            <Box width={16} />

            <Button
              variant="contained"
              color="secondary"
              label={msgs.phrase.createDevice}
              to="/myDevice"
              component={RouterLink}
            />

          </Box>

        </Paper>

      </Box>

      {/* page content */}
      <Box
        p={3}
        display="flex"
        alignItems="flex-start"
        justifyContent="space-between"
      >

        {/* About this Application */}
        <Box flex={1}>

          <Paper
            className={classes.paper}
          >
            <Typography
              gutterBottom
              variant="h6"
              message={msgs.phrase.about}
            />

            <Box display="flex">

              <Box flex="1">

                <Box mb={3}>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    message={msgs.phrase.goal}
                  />

                  <Typography
                    gutterBottom
                    variant="body2"
                    message={msgs.phrase.goalContent}
                  />
                </Box>

                <Box>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    message={msgs.phrase.usage}
                  />

                  <Typography
                    gutterBottom
                    variant="body2"
                    message={msgs.phrase.usageContent}
                  />
                </Box>

              </Box>

              <Box
                mx={3}
                border={1}
                borderColor="divider"
              />

              <Box flex="1">

                <Box mb={3}>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    message={msgs.phrase.test}
                  />

                  <Typography
                    gutterBottom
                    variant="body2"
                    message={msgs.phrase.testContent}
                  />
                </Box>

                <Box mb={3}>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    message={msgs.phrase.additional}
                  />

                  <Typography
                    gutterBottom
                    variant="body2"
                    message={msgs.phrase.additionalContent}
                  />
                </Box>

                <Box mb={3}>
                  <Typography
                    gutterBottom
                    variant="subtitle2"
                    message={msgs.phrase.greeting}
                  />
                </Box>

              </Box>

            </Box>
          </Paper>

          <Box height={32} />

          {/* Getting Started */}
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

        {/* Documentations */}
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
