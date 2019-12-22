import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import MuiTypography from '@material-ui/core/Typography';

const Typography = ({
  message,
  values,
  ...props
}) => (
  <MuiTypography
    {...props}
  >
    {(() => {
      if (typeof message === 'string'
      || typeof message === 'number'
      || React.isValidElement(message)) {
        return message;
      }

      if (!message || !message.id) {
        return 'message missing';
      }

      return (
        <FormattedMessage
          {...message}
          values={values}
        />
      );
    })()}
  </MuiTypography>
);

Typography.propTypes = {
  message: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  values: PropTypes.object,
};

Typography.defaultProps = {
  values: {},
};

export default Typography;
