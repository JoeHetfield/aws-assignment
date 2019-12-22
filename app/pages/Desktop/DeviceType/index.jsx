import React from 'react';
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Box from '@material-ui/core/Box';

import Layout from '../components/ContentLayout';

import Summary from './Summary';
import DeviceTypeList from './DeviceTypeList';
import DeviceTypeEditor from './DeviceTypeEditor';

const DeviceType = () => {
  const { path, url } = useRouteMatch();

  console.log(path, url)

  return (
    <Layout>

      <Summary />

      <Box p={2} flex={1}>

        <Switch>

          <Route path={`${url}/:typeId`} component={DeviceTypeEditor} />

          <Route path={`${url}/`} component={DeviceTypeList} />

        </Switch>

      </Box>

    </Layout>
  );
};

export default DeviceType;
