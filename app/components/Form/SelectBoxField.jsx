import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = ({ palette, transitions }) => ({
  root: {
    padding: '0px 12px',
    lineHeight: '32px',
    alignItems: 'center',
    color: palette.text.secondary,
    transition: transitions.create('background-color'),
    '&:hover': {
      backgroundColor: palette.action.hover,
    },
  },
  disabled: {
    backgroundColor: palette.action.disabledBackground,
  },
  startAdornment: {
    minWidth: '3em',
  },
  icon: {
    right: 8,
  },
});

class SelectField extends React.Component {
  state = {
    open: false,
    anchorEl: null,
    menuWidth: null,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSelect = (option) => () => {
    this.props.input.onChange(option.value);
    this.displayNode.value = option.label;
    this.handleClose();
  };

  setRef = (element) => {
    this.setState({ menuWidth: element && element.clientWidth });
    this.displayNode = element;
  };

  render() {
    const {
      classes,
      // form: { touched, errors },
      field,
      options,
      id,
      disabled,
      startAdornment,
      ...props
    } = this.props;

    // const initialOption = options.find(item => item.value === input.value);

    return (
      <TextField
        select
        {...field}
        {...props}
        InputProps={{
          id,
          className: classes.root,
          disableUnderline: true,
          startAdornment: (
            <InputAdornment
              htmlFor={id}
              position="start"
              component="label"
              classes={{ root: classes.startAdornment }}
            >
              <FormattedMessage {...startAdornment} />
            </InputAdornment>
          ),
        }}
        SelectProps={{
          classes: {
            icon: classes.icon,
          },
        }}
      >

        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
          >
            <FormattedMessage {...option.label} />
          </MenuItem>
        ))}

      </TextField>
    );
  }
}

SelectField.propTypes = {
  // style
  classes: PropTypes.object.isRequired,
  // formik
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  // select options
  options: PropTypes.array.isRequired,
};

export default withStyles(styles)(SelectField);
