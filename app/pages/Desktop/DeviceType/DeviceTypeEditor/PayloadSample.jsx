/* eslint-disable react/prop-types */
import React from 'react';
import faker from 'faker';
import PropTypes from 'prop-types';

import Box from '@material-ui/core/Box';

import Typography from 'components/Typography';

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
        message="Sample Message Payload"
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
