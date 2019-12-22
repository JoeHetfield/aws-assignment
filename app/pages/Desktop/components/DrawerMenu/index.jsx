import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import TopBar from './TopBar';
import MenuList from './MenuList';

const drawerWidth = 240;

const useStyles = makeStyles(({ spacing, transitions }) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: spacing(7) + 1,
  },
}));

const Menu = () => {
  const open = useSelector((state) => state.ui.drawerMenu.open);

  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      open={open}
      className={classNames(classes.drawer, classes[open ? 'drawerOpen' : 'drawerClose'])}
      classes={{
        paper: classes[open ? 'drawerOpen' : 'drawerClose'],
      }}
    >

      <TopBar />

      <Divider />

      <MenuList open={open} />

    </Drawer>
  );
};

export default Menu;
