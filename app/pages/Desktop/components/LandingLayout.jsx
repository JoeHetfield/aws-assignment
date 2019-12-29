import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

const LandingLayout = ({
  className,
  children,
}) => (
  <>

    <Box flex={1} className={className}>
      {children}
    </Box>

  </>
);

LandingLayout.propTypes = {
  // style
  className: PropTypes.string.isRequired,
  // data
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default LandingLayout;
