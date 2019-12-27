import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Typography from 'components/Typography';

import { Common as commonMsgs } from 'messages';

import TopBar from './TopBar';

const useStyles = makeStyles(() => ({
  content: {
    overflow: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
  },
}));

const Automotive = () => {
  const classes = useStyles();

  return (
    <>
      <TopBar />

      <Box
        p={2}
        flex={1}
        display="flex"
        alignItems="center"
        justifyContent="center"
        className={classes.content}
      >

        <Typography
          gutterBottom
          color="textSecondary"
          variant="h6"
          message={commonMsgs.phrase.underConstruction}
        />

      </Box>

    </>
  );
};

export default Automotive;
