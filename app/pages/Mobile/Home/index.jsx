import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';

import Link from 'components/Link';
import Button from 'components/Button';
import Typography from 'components/Typography';

import TopBar from './TopBar';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <TopBar />
      <Typography message="123" />
    </>
  );
};

export default Home;
