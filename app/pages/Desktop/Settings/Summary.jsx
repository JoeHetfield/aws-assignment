import React from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import teal from '@material-ui/core/colors/teal';

import Typography from 'components/Typography';

import { Common as commonMsgs } from 'messages';

const useStyles = makeStyles(({ spacing }) => ({
  summary: {
    padding: spacing(2, 3),
    display: 'flex',
    alignItems: 'center',
  },
  runningLabel: {
    color: teal[500],
  },
}));

const Summary = () => {
  const classes = useStyles();

  const { pathname } = useLocation();
  const pathnames = pathname.split('/').filter((x) => x);

  return (
    <Paper
      square
      elevation={0}
      className={classes.summary}
    >

      <Box
        display="flex"
        flexDirection="column"
      >
        <Typography
          gutterBottom
          variant="h5"
          className="pageTitle"
          message={commonMsgs.nonu.settings}
        />

        <Breadcrumbs>
          <Link
            to="/"
            color="inherit"
            component={RouterLink}
          >
            Home
          </Link>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return last ? (
              <Typography
                key={to}
                color="textPrimary"
                message={value}
              />
            ) : (
              <Link
                to={to}
                key={to}
                color="inherit"
                component={RouterLink}
              >
                {value}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Box>

      <Box flex={1} />

      <Box
        display="flex"
        flexDirection="column"
      >
        <Typography
          gutterBottom
          variant="subtitle2"
          message={commonMsgs.nonu.devices}
        />
        <Typography
          color="secondary"
          variant="h6"
          message={commonMsgs.phrase.totalDevices}
        />
      </Box>

      <Box
        ml={4}
        display="flex"
        flexDirection="column"
      >
        <Typography
          gutterBottom
          variant="subtitle2"
          message={commonMsgs.nonu.simulations}
        />
        <Typography
          variant="h6"
          message={commonMsgs.phrase.runningSimulations}
          className={classes.runningLabel}
        />
      </Box>

    </Paper>
  );
};

export default Summary;
