import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link, useLocation, useHistory } from 'react-router-dom';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import HomeIcon from '@material-ui/icons/Home';
import BitcoinIcon from 'mdi-material-ui/Bitcoin';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ChartAreasplineIcon from 'mdi-material-ui/ChartAreaspline';
import AccountBalanceWallet from '@material-ui/icons/AccountBalanceWallet';

import { Session } from 'actions';
import { Common as commonMsgs } from 'messages';
import { useStoreState, useActions } from 'hooks';

const pattern = /\/([^/]*)/;

const BottomMenu = () => {
  const token = useStoreState(['session', 'token']);

  const actions = useActions({
    openSignInDialog: Session.openSignInDialog,
  });

  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <BottomNavigation
      showLabels
      value={pathname.match(pattern)[1] || 'home'}
    >

      <BottomNavigationAction
        label={(
          <FormattedMessage {...commonMsgs.home} />
        )}
        icon={<HomeIcon />}
        to="/"
        value="home"
        component={Link}
      />

      <BottomNavigationAction
        label={(
          <FormattedMessage {...commonMsgs.otcAbbr} />
        )}
        icon={<MonetizationOnIcon />}
        to="/otc"
        value="otc"
        component={Link}
      />

      <BottomNavigationAction
        label={(
          <FormattedMessage {...commonMsgs.spotAbbr} />
        )}
        icon={<BitcoinIcon />}
        to="/spot"
        value="spot"
        component={Link}
      />

      <BottomNavigationAction
        label={(
          <FormattedMessage {...commonMsgs.cfdAbbr} />
        )}
        icon={<ChartAreasplineIcon />}
        to="/cfd"
        value="cfd"
        component={Link}
      />

      <BottomNavigationAction
        label={(
          <FormattedMessage {...commonMsgs.assets} />
        )}
        icon={<AccountBalanceWallet />}
        value="wallet"
        onClick={() => token ? history.push('/wallet') : actions.openSignInDialog()}
      />

    </BottomNavigation>
  );
};

export default BottomMenu;
