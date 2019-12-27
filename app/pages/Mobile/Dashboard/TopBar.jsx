import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import TranslateIcon from '@material-ui/icons/Translate';

import Typography from 'components/Typography';

import { DrawerMenu, Setting } from 'actions';
import { Common as commonMsgs } from 'messages';
import { useActions, useMenuToggler } from 'hooks';

const useStyles = makeStyles(({ spacing }) => ({
  menuButton: {
    marginRight: spacing(2),
  },
  title: {
    flexGrow: 1,
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
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          message={commonMsgs.nonu.dashboard}
          className={classes.title}
        />

        <IconButton
          edge="end"
          color="inherit"
          onClick={openMenu}
        >
          <TranslateIcon />
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
