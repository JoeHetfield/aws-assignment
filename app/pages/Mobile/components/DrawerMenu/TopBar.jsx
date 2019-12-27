import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(() => ({
  toolbar: {
    paddingLeft: 14,
  },
}));

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar
      elevation={0}
      position="static"
    >

      <Toolbar className={classes.toolbar}>

        <img width="30" src="/assets/img/aws_smile.png" alt="logo" />

        <Box width={16} flexShrink={0} />

        <img height="40" src="/assets/img/simengine.png" alt="sim" />

      </Toolbar>

    </AppBar>
  );
};

export default TopBar;
