import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const SelectField = ({
  form: { touched, errors },
  field,
  label,
  labelValues,
  options,
  ...props
}) => {
  const mappedError = touched[field.name] && errors[field.name]
    ? {
      error: true,
      label: <FormattedMessage {...errors[field.name]} />,
    } : {};

  return (
    <TextField
      select
      {...field}
      {...props}
      label={label && label.id ? (
        <FormattedMessage
          {...label}
          values={labelValues}
        />
      ) : label}
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
  // formik
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  // selectField
  label: PropTypes.object.isRequired,
  labelValues: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
};

export default SelectField;
