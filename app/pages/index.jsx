import React, { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { MuiThemeProvider, useTheme, makeStyles } from '@material-ui/core/styles';

import theme from 'theme';
import { Bootstrap } from 'actions';
import { Common as commonMsgs } from 'messages';
import { useActions } from 'hooks';

import Placeholder from 'components/Placeholder';

import Mobile from './Mobile';
import Desktop from './Desktop';

const useStyles = makeStyles(({ breakpoints }) => ({
  '@global': {
    '@font-face': {
      'font-family': 'Roboto Condensed',
      src: 'url("/assets/fonts/RobotoCondensed-Regular.ttf") format("truetype")',
    },
    'html, body, #app': {
      width: '100vw',
      height: '100%',
      display: 'flex',
      minWidth: '100vw',
      maxWidth: '100vw',
      minHeight: '100%',
      maxHeight: '100%',
      [breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    '*:focus': {
      outline: 'none',
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('sm'));

  const locale = useSelector((state) => state.ui.setting.locale);
  const booting = useSelector((state) => state.ui.booting);
  const messages = useSelector((state) => state.ui.messages);

  const actions = useActions({
    bootstrap: Bootstrap.start,
    loadUser: Bootstrap.loadUser,
  });

  useEffect(actions.bootstrap, []);

  return (
    <IntlProvider
      locale={locale}
      textComponent={React.Fragment}
      messages={messages.get(locale).toJS()}
    >

      <MuiThemeProvider theme={theme.base}>

        <CssBaseline />

        {(() => {
          if (booting) {
            return (
              <Placeholder
                loading
                message={commonMsgs.booting}
              />
            );
          }

          return isMobile ? <Mobile /> : <Desktop />;
        })()}

      </MuiThemeProvider>

    </IntlProvider>
  );
};

export default Main;
