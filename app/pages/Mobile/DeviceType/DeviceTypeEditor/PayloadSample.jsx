/* eslint-disable react/prop-types */
import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import Typography from 'components/Typography';

import { DeviceType as msgs } from 'messages';

const PayloadList = ({
  payload,
}) => {
  const sample = {};

  payload.forEach((item) => {
    sample[item.name] = faker.random.word();
  });

  return (
    <Box
      my={2}
      display="flex"
      flexDirection="column"
    >
      <Typography
        message={msgs.nonu.sampleMessagePayload}
      />

      <pre>
        <Typography
          variant="caption"
          message={JSON.stringify(sample, null, 2)}
        />
      </pre>
    </Box>
  );
};

PayloadList.propTypes = {
  // data
  payload: PropTypes.object.isRequired,
};

export default PayloadList;
