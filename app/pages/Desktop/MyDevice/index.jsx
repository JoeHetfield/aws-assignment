import React from 'react';

import Box from '@material-ui/core/Box';

import { Common as commonMsgs } from 'messages';

import Typography from 'components/Typography';
import Layout from '../components/ContentLayout';

import Summary from './Summary';

const MyDevice = () => (
  <Layout>

    <Summary />

    <Box
      p={2}
      flex={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >

      <Typography
        gutterBottom
        color="textSecondary"
        variant="h4"
        message={commonMsgs.phrase.underConstruction}
      />

    </Box>

  </Layout>
);

export default MyDevice;
