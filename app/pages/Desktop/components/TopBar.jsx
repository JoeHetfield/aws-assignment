import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter, useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { DrawerMenu } from 'actions';
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

const languageMap = {
  'zh-CN': '中文',
  'en-US': 'English',
};

const TopBar = ({
  offset,
  location,
}) => {
  const token = useSelector((state) => state.session.token);
  const locale = useSelector((state) => state.ui.setting.locale);
  // const profile = useSelector((state) => state.entities.user.profile);

  const actions = useActions({
    openDrawerMenu: DrawerMenu.toggle,
  });

  const [
    languageMenuAnchorEl,
    openLanguageMenu,
    closeLanguageMenu,
  ] = useMenuToggler();

  const [
    campaignMenuAnchorEl,
    openCampaignMenu,
    closeCampaignMenu,
  ] = useMenuToggler();

  const [
    nomickyMenuAnchorEl,
    openNomickyMenu,
    closeNomickyMenu,
  ] = useMenuToggler();

  const history = useHistory();
  const classes = useStyles();


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
        >
          <AccountCircleIcon />
        </IconButton>

      </Toolbar>

    </AppBar>
  );
};

TopBar.propTypes = {
  // state
  offset: PropTypes.number,
  location: PropTypes.object.isRequired,
};

TopBar.defaultProps = {
  offset: 0,
};

export default withRouter(TopBar);
