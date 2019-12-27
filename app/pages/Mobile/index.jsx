import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from 'theme';

import DrawerMenu from './components/DrawerMenu';

import Home from './Home';
import Users from './Users';
import Widgets from './Widgets';
import MyDevice from './MyDevice';
import Settings from './Settings';
import Dashboard from './Dashboard';
import MyProfile from './MyProfile';
import DeviceType from './DeviceType';
import Automotive from './Automotive';

const Mobile = () => (
  <SnackbarProvider
    dense
    maxSnack={1}
    autoHideDuration={3000}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
  >

    <MuiThemeProvider theme={theme.mobile}>

      <Switch>

        <Route path="/home" component={Home} />

        <Route path="/dashboard" component={Dashboard} />

        <Route path="/myDevice" component={MyDevice} />

        <Route path="/myProfile" component={MyProfile} />

        <Route path="/deviceType" component={DeviceType} />

        <Route path="/widgets" component={Widgets} />

        <Route path="/automotive" component={Automotive} />

        <Route path="/users" component={Users} />

        <Route path="/settings" component={Settings} />

        <Route path="/" component={Home} />

      </Switch>

      <DrawerMenu />

    </MuiThemeProvider>

  </SnackbarProvider>
);

export default Mobile;
