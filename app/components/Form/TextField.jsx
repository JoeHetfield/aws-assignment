import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MaskedInput from 'react-text-mask';
import MuiTextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import path from 'ramda/es/path';

import {
  intlShape,
  injectIntl,
  FormattedMessage,
} from 'react-intl';

const useStyles = makeStyles({
  input: {
    flex: 1,
  },
});

function TextMaskCustom({
  inputRef,
  mask,
  ...other
}) {
  return (
    <MaskedInput
      {...other}
      ref={(ref) => inputRef(ref ? ref.inputElement : null)}
      mask={mask}
      placeholderChar={'\u2000'}
    />
  );
}

TextMaskCustom.propTypes = {
  mask: PropTypes.array.isRequired,
  inputRef: PropTypes.func.isRequired,
};

const TextField = ({
  intl,
  form: { touched, errors },
  field,
  mask,
  label,
  labelValues,
  helperText,
  helperTextValues,
  placeholder,
  placeholderValues,
  inputProps,
  endAdornment,
  startAdornment,
  ...restProps
}) => {
  const classes = useStyles();

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

  const pathArr = field.name.split('.');
  const touchedValue = path(pathArr, touched);
  const errorsValue = path(pathArr, errors);

  // errors
  const mappedError = touchedValue && errorsValue
    ? {
      error: true,
      helperText: (typeof errorsValue === 'string') ? errorsValue : <FormattedMessage {...errorsValue} />,
    } : {};

  // adornments & mask
  const InputProps = {
    endAdornment,
    startAdornment,
  };

  if (mask) {
    InputProps.inputComponent = TextMaskCustom;
  }

  return (
    <MuiTextField
      {...field}
      {...restProps}
      label={intlMessage(label, labelValues)}
      helperText={intlMessage(helperText, helperTextValues)}
      placeholder={intlMessage(placeholder, placeholderValues)}
      InputProps={InputProps}
      inputProps={{
        className: classnames(classes.input, inputProps.className),
        mask,
      }}
      {...mappedError}
    />
  );
};

TextField.propTypes = {
  // intl
  intl: intlShape.isRequired,
  // formik
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  // TextField
  mask: PropTypes.array,
  label: PropTypes.object,
  labelValues: PropTypes.object,
  inputProps: PropTypes.object,
  placeholder: PropTypes.object,
  placeholderValues: PropTypes.object,
  helperText: PropTypes.object,
  helperTextValues: PropTypes.object,
  endAdornment: PropTypes.object,
  startAdornment: PropTypes.object,
};

TextField.defaultProps = {
  mask: null,
  inputProps: {},
  label: null,
  labelValues: null,
  placeholder: null,
  placeholderValues: null,
  helperText: null,
  helperTextValues: null,
  endAdornment: null,
  startAdornment: null,
};

export default injectIntl(TextField);
