import mergeDeepRight from 'ramda/es/mergeDeepRight';
import { createMuiTheme } from '@material-ui/core/styles';

import base from './base';
import mobile from './mobile';

export default {
  base: createMuiTheme(base),
  mobile: createMuiTheme(mergeDeepRight(base, mobile)),
};
