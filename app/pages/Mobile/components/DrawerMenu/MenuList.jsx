import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import FeesIcon from 'mdi-material-ui/FilePercentOutline';
import SafeIcon from 'mdi-material-ui/ShieldCheckOutline';
import OrderIcon from 'mdi-material-ui/LayersTripleOutline';
import VoiceIcon from 'mdi-material-ui/MicrophoneOutline';
import QrcodeIcon from 'mdi-material-ui/ViewDashboardOutline';
import TutorialIcon from 'mdi-material-ui/BookOpenOutline';
import LanguageIcon from '@material-ui/icons/Language';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Typography from 'components/Typography';

import { Common as commonMsgs } from 'messages';

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    overflowY: 'auto',
  },
}));

const MenuList = ({
  openInvitationDialog,
  openFeesDialog,
  openUserGuideDialog,
  openSecurityGuideDialog,
  openAnnouncements,
  openLanguageDialog,
}) => {
  const classes = useStyles();

  const items = [{
    key: 'myInvitationCode',
    label: commonMsgs.myInvitationCode,
    action: openInvitationDialog,
    icon: <QrcodeIcon />,
  }, {
    key: 'orderManagement',
    label: commonMsgs.orderManagement,
    action: openUserGuideDialog,
    icon: <OrderIcon />,
  }, {
    key: 'fees',
    label: commonMsgs.fees,
    action: openFeesDialog,
    icon: <FeesIcon />,
  },
  // {
  //   key: 'download',
  //   label: commonMsgs.download,
  //   action: openDowloadDialog,
  //   icon: <DownloadIcon />,
  // }, {
  //   key: 'onlineService',
  //   label: commonMsgs.onlineService,
  //   action: openUserGuideDialog,
  //   icon: <ServiceIcon />,
  // },
  {
    key: 'userGuide',
    label: commonMsgs.userGuide,
    action: openUserGuideDialog,
    icon: <TutorialIcon />,
  }, {
    key: 'safe',
    label: commonMsgs.safe,
    action: openSecurityGuideDialog,
    icon: <SafeIcon />,
  }, {
    key: 'announcements',
    label: commonMsgs.announcements,
    action: openAnnouncements,
    icon: <VoiceIcon />,
  }, {
    key: 'language',
    label: commonMsgs.language,
    action: openLanguageDialog,
    icon: <LanguageIcon />,
  }];

  return (

    <List className={classes.root}>

      {items.map(({
        key,
        label,
        action,
        icon,
      }, index) => (
        <React.Fragment key={key}>

          <ListItem
            button
            onClick={action}
          >

            <ListItemIcon>
              {icon}
            </ListItemIcon>

            <ListItemText
              primary={(
                <Typography
                  variant="h6"
                  message={label}
                />
              )}
            />

            <ChevronRightIcon color="action" />

          </ListItem>

          {(index !== items.Length) && (
            <Divider light />
          )}

        </React.Fragment>
      ))}

    </List>
  );
};

MenuList.propTypes = {
  // action
  openFeesDialog: PropTypes.func.isRequired,
  openAnnouncements: PropTypes.func.isRequired,
  openLanguageDialog: PropTypes.func.isRequired,
  openUserGuideDialog: PropTypes.func.isRequired,
  openInvitationDialog: PropTypes.func.isRequired,
  openSecurityGuideDialog: PropTypes.func.isRequired,
};

export default MenuList;
