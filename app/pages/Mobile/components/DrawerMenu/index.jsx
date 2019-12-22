import React from 'react';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import { Session, DrawerMenu } from 'actions';
import { useActions, useStoreState, useDialogToggler } from 'hooks';

import TopBar from './TopBar';
import MenuList from './MenuList';

const Menu = () => {
  const open = useStoreState(['ui', 'drawerMenu', 'open']);
  const token = useStoreState(['session', 'token']);
  const profile = useStoreState(['entities', 'user', 'profile']);

  const actions = useActions({
    closeDrawerMenu: DrawerMenu.close,
    openSignInDialog: Session.openSignInDialog,
    openSignOutDialog: Session.openSignOutDialog,
  });

  const [
    accountDialogOpen,
    openAccountDialog,
    closeAccountDialog,
  ] = useDialogToggler(false);

  const [
    invitationDialogOpen,
    openInvitationDialog,
    closeInvitationDialog,
  ] = useDialogToggler(false);

  const [
    feesDialogOpen,
    openFeesDialog,
    closeFeesDialog,
  ] = useDialogToggler(false);

  const [
    userGuideDialogOpen,
    openUserGuideDialog,
    closeUserGuideDialog,
  ] = useDialogToggler(false);

  const [
    securityGuideDialogOpen,
    openSecurityGuideDialog,
    closeSecurityGuideDialog,
  ] = useDialogToggler(false);

  const [
    announcementsOpen,
    openAnnouncements,
    closeAnnouncements,
  ] = useDialogToggler(false);

  const [
    languageDialogOpen,
    openLanguageDialog,
    closeLanguageDialog,
  ] = useDialogToggler(false);

  return (
    <Drawer
      open={open}
      onClose={actions.closeDrawerMenu}
    >

      <TopBar
        token={token}
        profile={profile}
        openAccountDialog={openAccountDialog}
        openSignInDialog={actions.openSignInDialog}
        openSignOutDialog={actions.openSignOutDialog}
      />

      <Divider />

      <MenuList
        openFeesDialog={openFeesDialog}
        openAnnouncements={openAnnouncements}
        openLanguageDialog={openLanguageDialog}
        openUserGuideDialog={openUserGuideDialog}
        openInvitationDialog={openInvitationDialog}
        openSecurityGuideDialog={openSecurityGuideDialog}
      />

    </Drawer>
  );
};

export default Menu;
