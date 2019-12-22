import React from 'react';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import Footer from './Footer';

const LandingLayout = ({
  className,
  children,
}) => (
  <>

    <Box flex={1} className={className}>
      {children}
    </Box>

    <Footer />

  </>
);

LandingLayout.propTypes = {
  // style
  className: PropTypes.string.isRequired,
  // data
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default LandingLayout;
