import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import { useActions } from 'hooks';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
  },
}));

const regex = /invitation\/(\d+)/;

const Home = () => {
  const { pathname } = useLocation();

  const classes = useStyles();
  const theme = useTheme();

  // console.log(theme)

  useEffect(() => {
    const match = pathname.match(regex);

    if (match && match.length === 2) {
      actions.invitation(match[1]);
      actions.openSignInDialog();
      actions.switchTab(4);
    }
  }, [pathname]);

  return (
    <Box
      py={3}
      px={4}
      flex="1"
      className={classes.root}
    >

      Hello

    </Box>
  );
};

export default Home;
