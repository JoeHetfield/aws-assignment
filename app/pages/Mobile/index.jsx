import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from 'theme';

import DrawerMenu from './components/DrawerMenu';

import Home from './Home';

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

        <Route path="/" component={Home} />

      </Switch>

      <DrawerMenu />

    </MuiThemeProvider>

  </SnackbarProvider>
);

export default Mobile;
