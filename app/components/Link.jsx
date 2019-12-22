import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import MuiLink from '@material-ui/core/Link';

const Link = ({
  label,
  values,
  ...props
}) => (
  <MuiLink
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
  </MuiLink>
);

Link.propTypes = {
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  values: PropTypes.object,
};

Link.defaultProps = {
  values: {},
};

export default Link;
