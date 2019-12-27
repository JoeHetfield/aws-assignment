import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { DrawerMenu, Setting } from 'actions';
import { useActions, useMenuToggler } from 'hooks';

const useStyles = makeStyles(({ spacing, transitions, zIndex }) => ({
  appBar: {
    zIndex: zIndex.drawer + 1,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
  logo: {
    height: spacing(8),
    marginLeft: spacing(2),
    marginRight: spacing(6),
  },
  spring: {
    flex: 1,
  },
  icon: {
    marginRight: spacing(1),
  },
  arrow: {
    marginLeft: spacing(1),
  },
}));

const TopBar = () => {
  const actions = useActions({
    changeLocale: Setting.changeLocale,
    openDrawerMenu: DrawerMenu.toggle,
  });

  const [
    menuAnchorEl,
    openMenu,
    closeMenu,
  ] = useMenuToggler();

  const classes = useStyles();

  const changeLanguage = (lang) => () => {
    actions.changeLocale(lang);
    closeMenu();
  };

  return (
    <AppBar
      elevation={0}
      position="static"
      className={classes.appBar}
    >

      <Toolbar>

        <IconButton
          edge="start"
          color="inherit"
          onClick={actions.openDrawerMenu}
        >
          <MenuIcon />
        </IconButton>

        <Box flex={1} />

        <IconButton
          edge="end"
          color="inherit"
          onClick={openMenu}
        >
          <AccountCircleIcon />
        </IconButton>

        <Menu
          id="simple-menu"
          anchorEl={menuAnchorEl}
          keepMounted
          open={Boolean(menuAnchorEl)}
          onClose={closeMenu}
        >
          <MenuItem onClick={changeLanguage('zh-CN')}>中文</MenuItem>
          <MenuItem onClick={changeLanguage('en-US')}>English</MenuItem>
        </Menu>

      </Toolbar>

    </AppBar>
  );
};

export default TopBar;
