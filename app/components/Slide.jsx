import React from 'react';

import Slide from '@material-ui/core/Slide';

const Up = props => <Slide direction="up" {...props} />;
const Left = props => <Slide direction="left" {...props} />;

export default {
  Up,
  Left,
};
