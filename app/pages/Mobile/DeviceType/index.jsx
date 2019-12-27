import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Box from '@material-ui/core/Box';

import TopBar from './TopBar';
import DeviceTypeList from './DeviceTypeList';
import DeviceTypeEditor from './DeviceTypeEditor';

const DeviceType = () => {
  const { url } = useRouteMatch();

  return (
    <>

      <TopBar />

      <DeviceTypeList />

    </>
  );
};

export default DeviceType;
