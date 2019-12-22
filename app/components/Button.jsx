import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import MuiButton from '@material-ui/core/Button';

const Button = ({
  label,
  values,
  ...props
}) => (
  <MuiButton
    {...props}
  >
    {(() => {
      if ((typeof label === 'string') || React.isValidElement(label)) {
        return label;
      }

      if (!label || !label.id) {
        return 'label missing';
      }

      return (
        <FormattedMessage
          {...label}
          values={values}
        />
      );
    })()}
  </MuiButton>
);

Button.propTypes = {
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  values: PropTypes.object,
};

Button.defaultProps = {
  values: {},
};

export default Button;
