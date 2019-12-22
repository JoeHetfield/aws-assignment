import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Container from 'components/Container';

import TopBar from './TopBar';
import DrawerMenu from './DrawerMenu';

const useStyles = makeStyles(({ transitions, zIndex }) => ({
  content: {
    marginLeft: 57,
    zIndex: zIndex.drawer + 1,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    marginLeft: 240,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
}));

const ContentLayout = ({
  children,
}) => {
  const drawerOpen = useSelector((state) => state.ui.drawerMenu.open);
  const classes = useStyles();

  return (
    <>

      <Box
        minHeight="100%"
        display="flex"
        flexDirection="column"
        className={classes[drawerOpen ? 'contentShift' : 'content']}
      >

        <TopBar />

        <Container>
          {children}
        </Container>

      </Box>

      <DrawerMenu />

    </>
  );
};

ContentLayout.propTypes = {
  // data
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ]).isRequired,
};

export default ContentLayout;
