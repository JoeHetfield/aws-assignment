import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import Logo from 'components/Logo/LightCircle';
import Typography from 'components/Typography';

import { User as UserMsgs, Common as commonMsgs } from 'messages';

const msgs = UserMsgs.ProfilePane.ProfileCard;

const useStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    width: '83vw',
    padding: spacing(14, 5, 5),
    backgroundColor: palette.primary.dark,
    display: 'flex',
    alignItems: 'center',
  },
}));

const TopBar = ({
  token,
  profile,
  openSignInDialog,
  openAccountDialog,
  // openSignOutDialog,
}) => {
  const classes = useStyles();

  return (
    <ButtonBase
      focusRipple
      className={classes.root}
      onClick={token ? openAccountDialog : openSignInDialog}
    >
      <Box
        width={48}
        height={48}
        borderRadius={24}
        bgcolor="common.white"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Logo width={24} height={40} />
      </Box>

      <Box
        mx={2}
        flex={1}
        display="flex"
        alignItems="flex-start"
        flexDirection="column"
      >
        <Typography
          gutterBottom
          variant="h3"
          message={token ? profile.get('nickname') : commonMsgs.signInOrUp}
        />

        <Typography
          message={token ? `UID: ${profile.get('userId')}` : msgs.welcome}
        />
      </Box>

      <ChevronRightIcon
        color="action"
        fontSize="large"
      />

    </ButtonBase>
  );
};

TopBar.propTypes = {
  // data
  token: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  // action
  openSignInDialog: PropTypes.func.isRequired,
  openAccountDialog: PropTypes.func.isRequired,
  // openSignOutDialog: PropTypes.func.isRequired,
};

export default TopBar;
