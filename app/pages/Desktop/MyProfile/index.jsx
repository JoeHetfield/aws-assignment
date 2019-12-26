import React from 'react';

import Box from '@material-ui/core/Box';

import Typography from 'components/Typography';

import { Common as commonMsgs } from 'messages';

import Layout from '../components/ContentLayout';

import Summary from './Summary';

const MyProfile = () => (
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

export default MyProfile;
