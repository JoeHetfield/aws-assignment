import React from 'react';
import { useSelector } from 'react-redux';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import { DrawerMenu } from 'actions';
import { useActions } from 'hooks';

import TopBar from './TopBar';
import MenuList from './MenuList';

const Menu = () => {
  const actions = useActions({
    closeDrawerMenu: DrawerMenu.toggle,
  });

  const open = useSelector((state) => state.ui.drawerMenu.open);

  return (
    <Drawer
      open={open}
      onClose={actions.closeDrawerMenu}
    >

      <TopBar />

      <Divider />

      <MenuList closeMenu={actions.closeDrawerMenu} />

    </Drawer>
  );
};

export default Menu;
