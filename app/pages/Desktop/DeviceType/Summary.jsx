import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import Typography from 'components/Typography';

const useStyles = makeStyles(({ spacing }) => ({
  summary: {
    padding: spacing(2, 3),
    display: 'flex',
  },
}));

const Summary = () => {
  const classes = useStyles();

  return (
    <Paper
      square
      elevation={0}
      className={classes.summary}
    >
      <Typography
        className="pageTitle"
        variant="h5"
        message="Device Types"
      />

      <Box flex={1} />

      <Box
        display="flex"
        flexDirection="column"
      >
        <Typography
          gutterBottom
          variant="subtitle2"
          message="Devices"
        />
        <Typography
          variant="h6"
          message="5 Total"
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
          message="Simulations"
        />
        <Typography
          variant="h6"
          message="0 Running"
        />
      </Box>

    </Paper>
  );
};

export default Summary;
