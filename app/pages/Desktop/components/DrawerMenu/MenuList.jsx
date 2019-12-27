import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

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
  // subheader: '',
  items: [{
    label: commonMsgs.nonu.home,
    path: '/home',
    icon: <HomeIcon />,
  }],
}, {
  subheader: commonMsgs.nonu.myMenu,
  items: [{
    key: 'dashboard',
    label: commonMsgs.nonu.dashboard,
    path: '/dashboard',
    icon: <DashboardIcon />,
  }, {
    key: 'myDevice',
    label: commonMsgs.nonu.myDevice,
    path: 'myDevice',
    icon: <DevicesOtherIcon />,
  }, {
    key: 'myProfile',
    label: commonMsgs.nonu.myProfile,
    path: '/myProfile',
    icon: <ContactMailIcon />,
  }],
}, {
  subheader: commonMsgs.nonu.module,
  items: [{
    key: 'deviceType',
    label: commonMsgs.nonu.deviceType,
    path: '/deviceType',
    icon: <DeveloperModeIcon />,
  }, {
    key: 'widgets',
    label: commonMsgs.nonu.widgets,
    path: '/widgets',
    icon: <WidgetsIcon />,
  }, {
    key: 'automotive',
    label: commonMsgs.nonu.automotive,
    path: '/automotive',
    icon: <DriveEtaIcon />,
  }],
}, {
  subheader: commonMsgs.nonu.administration,
  items: [{
    key: 'users',
    label: commonMsgs.nonu.users,
    path: '/users',
    icon: <GroupIcon />,
  }, {
    key: 'settings',
    label: commonMsgs.nonu.settings,
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
            <FormattedMessage {...subheader} />
          </ListSubheader>
        )}
      >

        {items.map(({
          key,
          label,
          path,
          icon,
        }) => (
          <ListItem
            id={key}
            key={key}
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
