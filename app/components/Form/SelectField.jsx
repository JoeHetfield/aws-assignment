import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import {
  intlShape,
  injectIntl,
  FormattedMessage,
} from 'react-intl';

const SelectField = ({
  intl,
  form: { touched, errors },
  field,
  label,
  labelValues,
  helperText,
  helperTextValues,
  options,
  ...props
}) => {
  const intlMessage = (message, values) => {
    if (!message) {
      return null;
    }

    if (typeof message === 'string') {
      return message;
    }

    if (!values) {
      return intl.formatMessage(message);
    }

    return intl.formatMessage(message, values);
  };

  const mappedError = touched[field.name] && errors[field.name]
    ? {
      error: true,
      helperText: <FormattedMessage {...errors[field.name]} />,
    } : {};

  return (
    <TextField
      select
      {...field}
      {...props}
      label={intlMessage(label, labelValues)}
      helperText={intlMessage(helperText, helperTextValues)}
      {...mappedError}
    >

      {options.map(option => (
        <MenuItem
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}

    </TextField>
  );
};

SelectField.propTypes = {
  // intl
  intl: intlShape.isRequired,
  // formik
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  // selectField
  label: PropTypes.object.isRequired,
  labelValues: PropTypes.object.isRequired,
  helperText: PropTypes.object,
  helperTextValues: PropTypes.object,
  options: PropTypes.array.isRequired,
};

export default injectIntl(SelectField);
