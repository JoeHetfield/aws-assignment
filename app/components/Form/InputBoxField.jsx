import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { intlShape, injectIntl } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

import MaskedInput from 'react-text-mask';
import MuiTextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(({ palette, transitions }) => ({
  root: {
    padding: '0px 12px',
    color: palette.text.secondary,
    height: '45px',
    alignItems: 'center',
    transition: transitions.create('background-color'),
    '&:hover': {
      backgroundColor: palette.action.hover,
    },
  },
  flash: {
    backgroundColor: 'rgba(171, 171, 171, 0.35)',
  },
  disabled: {
    backgroundColor: palette.action.hover,
  },
  startAdornment: {
    minWidth: '3em',
  },
  endAdornment: {
    wordBreak: 'keep-all',
  },
}));

function TextMaskCustom(props) {
  const { inputRef, mask, ...other } = props;

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
  mask: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired,
};

const InputBoxField = ({
  // classes,
  intl,
  // form: { touched, errors },
  field,
  id,
  mask,
  disabled,
  placeholder,
  endAdornment,
  startAdornment,
  ...props
}) => {
  const getIntlComponent = (component) => {
    if (typeof component === 'string'
    || typeof component === 'number'
    || React.isValidElement(component)) {
      return component;
    }

    if (!component || !component.id) {
      return 'message missing';
    }

    return intl.formatMessage(component);
  };

  const classes = useStyles();

  // adornments & mask
  const InputProps = {
    id,
    className: classNames(
      classes.root,
      // flash && classes.flash,
      disabled && classes.disabled,
    ),
    disableUnderline: true,
    startAdornment: (
      <InputAdornment
        htmlFor={id}
        position="start"
        component="label"
        classes={{ root: classes.startAdornment }}
      >
        {getIntlComponent(startAdornment)}
      </InputAdornment>
    ),
    endAdornment: (
      <InputAdornment
        htmlFor={id}
        position="end"
        component="label"
        classes={{ root: classes.endAdornment }}
      >
        {getIntlComponent(endAdornment)}
      </InputAdornment>
    ),
  };

  if (mask) {
    InputProps.inputComponent = TextMaskCustom;
  }

  return (
    <MuiTextField
      {...field}
      {...props}
      disabled={disabled}
      placeholder={getIntlComponent(placeholder)}
      inputProps={{ mask }}
      InputProps={InputProps}
    />
  );
};

InputBoxField.propTypes = {
  // intl
  intl: intlShape.isRequired,
  // formik
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,
  // custom
  id: PropTypes.string.isRequired,
  mask: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.any,
  endAdornment: PropTypes.any,
  startAdornment: PropTypes.any,
};

InputBoxField.defaultProps = {
  mask: null,
  disabled: null,
  placeholder: '',
  endAdornment: '',
  startAdornment: '',
};

export default injectIntl(InputBoxField);
