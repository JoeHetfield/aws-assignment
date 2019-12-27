import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';

import Slide from 'components/Slide';
import Typography from 'components/Typography';
import LoadingButton from 'components/LoadingButton';

import { DeviceType as msgs, Common as commonMsgs } from 'messages';

const useStyles = makeStyles(({ spacing }) => ({
  paper: {
    padding: spacing(1, 3),
  },
}));

const PayloadDetail = ({
  open,
  closeDialog,
  selectedPayload,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      scroll="body"
      onClose={closeDialog}
      TransitionComponent={Slide.Up}
      classes={{
        paper: classes.paper,
      }}
    >
      <Box
        my={2}
        display="flex"
        flexDirection="column"
      >
        <Typography
          variant="h6"
          message={msgs.nonu.payloadConfig}
        />
      </Box>

      <pre>
        <Typography
          id="labelPayloadDetail"
          variant="body2"
          message={JSON.stringify(selectedPayload, null, 2)}
        />
      </pre>

      <Box
        display="flex"
        justifyContent="flex-end"
      >

        <LoadingButton
          id="btnPayloadClose"
          size="large"
          label={commonMsgs.verb.close}
          onClick={closeDialog}
        />

      </Box>

    </Dialog>
  );
};

PayloadDetail.propTypes = {
  open: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  selectedPayload: PropTypes.object.isRequired,
};

export default PayloadDetail;
