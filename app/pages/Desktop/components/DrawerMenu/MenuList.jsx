import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter, useHistory } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import WidgetsIcon from '@material-ui/icons/Widgets';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

import Typography from 'components/Typography';

import { Common as commonMsgs } from 'messages';

const menus = [{
  subheader: '',
  items: [{
    label: 'Home',
    path: '/home',
    icon: <HomeIcon />,
  }],
}, {
  subheader: 'My Menu',
  items: [{
    key: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
  }, {
    key: 'myDevice',
    label: 'My Device',
    path: 'myDevice',
    icon: <DevicesOtherIcon />,
  }, {
    key: 'myProfile',
    label: 'My Profile',
    path: '/myProfile',
    icon: <ContactMailIcon />,
  }],
}, {
  subheader: 'Modules',
  items: [{
    key: 'deviceType',
    label: 'Device Type',
    path: '/deviceType',
    icon: <DeveloperModeIcon />,
  }, {
    key: 'widgets',
    label: 'Widgets',
    path: '/widgets',
    icon: <WidgetsIcon />,
  }, {
    key: 'automotive',
    label: 'Automotive',
    path: '/automotive',
    icon: <DriveEtaIcon />,
  }],
}, {
  subheader: 'Administration',
  items: [{
    key: 'users',
    label: 'Users',
    path: '/users',
    icon: <GroupIcon />,
  }, {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />,
  }],
}];

const MenuList = ({
  open,
}) => (
  <Box flex={1} overflow="auto">

    {menus.map(({ subheader, items }) => (
      <List
        key={subheader}
        subheader={open && subheader && (
          <ListSubheader>
            {subheader}
          </ListSubheader>
        )}
      >

        {items.map(({
          label,
          path,
          icon,
        }) => (
          <ListItem
            key={label}
            button
            to={path}
            component={Link}
          >

            <ListItemIcon>
              {icon}
            </ListItemIcon>

            <ListItemText
              primary={(
                <Typography
                  message={label}
                />
              )}
            />

          </ListItem>
        ))}

      </List>
    ))}
  </Box>
);

MenuList.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default MenuList;
