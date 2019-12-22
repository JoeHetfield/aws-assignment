import MuiAppBar from './MuiAppBar';
import MuiButton from './MuiButton';
import MuiTab from './MuiTab';
import MuiInput from './MuiInput';
import MuiListItem from './MuiListItem';
import MuiListItemText from './MuiListItemText';
import MuiListItemIcon from './MuiListItemIcon';
import MuiInputBase from './MuiInputBase';
import MuiInputLabel from './MuiInputLabel';
import MuiFormControl from './MuiFormControl';
import MuiBottomNavigationAction from './MuiBottomNavigationAction';

const baseTheme = {
  palette: {
    type: 'dark',
    primary: {
      light: '#6FDDBA',
      main: '#1EB980',
      dark: '#045D56',
    },
    secondary: {
      light: '#FFAEA6',
      main: '#FF6859',
      dark: '#8B2F27',
    },
    highlight: {
      light: '#F3E2B8',
      main: '#E6CC7F',
      dark: '#76653A',
    },
    background: {
      paper: '#32333D',
      default: '#2D2E33',
    },
    yin: '#FF6859',
    yang: '#1EB980',
  },
  typography: {
    fontFamily: 'Roboto Condensed,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Microsoft Yahei,Arial,sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: 34,
    },
    h2: {
      fontWeight: 600,
      fontSize: 28,
    },
    h3: {
      fontWeight: 600,
      fontSize: 24,
    },
    h4: {
      fontWeight: 600,
      fontSize: 20,
    },
    h5: {
      fontWeight: 600,
      fontSize: 18,
    },
    h6: {
      fontWeight: 600,
      fontSize: 16,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: 14,
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: 12,
    },
    body1: {
      fontWeight: 400,
      fontSize: 14,
    },
    body2: {
      fontWeight: 400,
      fontSize: 16,
    },
    button: {
      fontWeight: 400,
      fontSize: 16,
    },
    caption: {
      fontWeight: 300,
      fontSize: 12,
    },
  },
  spacing: 4,
  overrides: {
    MuiAppBar,
    MuiButton,
    MuiTab,
    MuiListItem,
    MuiListItemText,
    MuiListItemIcon,
    MuiInput,
    MuiInputBase,
    MuiInputLabel,
    MuiFormControl,
    MuiBottomNavigationAction,
  },
};

export default baseTheme;
