/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Link from 'components/Link';
import Button from 'components/Button';
import Container from 'components/Container';
import Typography from 'components/Typography';

import { Home as msgs, Common as commonMsgs } from 'messages';

import TopBar from './TopBar';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    overflow: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
  },
  paper: {
    padding: spacing(2, 3),
    display: 'flex',
    flexDirection: 'column',
    marginBottom: spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <TopBar />

      <Container>

        <Box
          px={2}
          pb={2}
          color="common.white"
          bgcolor="primary.main"
        >
          <Typography
            gutterBottom
            variant="body1"
            message={msgs.phrase.subtitle}
          />

          <Typography
            variant="body2"
            message={msgs.phrase.explaination}
          />
        </Box>

        <Box
          p={2}
        >

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
              variant="h5"
              message={commonMsgs.phrase.totalDevices}
            />

            <Box
              display="flex"
              justifyContent="flex-end"
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
              variant="body2"
              label={msgs.nonu.overview}
            />

            <Link
              href="#"
              gutterBottom
              variant="body2"
              label={msgs.nonu.guide}
            />

            <Link
              href="#"
              gutterBottom
              variant="body2"
              label={msgs.nonu.repository}
            />
          </Paper>

          <Paper
            className={classes.paper}
          >
            <Typography
              gutterBottom
              variant="h6"
              message={msgs.phrase.about}
            />

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

            <Box mb={3}>
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

            <Box>
              <Typography
                gutterBottom
                variant="subtitle2"
                message={msgs.phrase.greeting}
              />
            </Box>

          </Paper>

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

      </Container>
    </>
  );
};

export default Home;
