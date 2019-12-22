import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const styles = ({ spacing: { unit } }) => ({
  helperText: {
    fontSize: 12,
    margin: `0 ${unit}px  ${unit}px`,
  },
});

const Checkbox = ({
  form: { touched, errors },
  field: { name, value, onChange },
  label,
  row = true,
  classes,
  options,
  helperText,
}) => (
  <FormControl
    error={touched[name] && errors[name]}
  >

    { label && (
      <FormLabel component="legend">
        {label}
      </FormLabel>
    )}

    <RadioGroup
      row={row}
      name={name}
      value={value}
      onChange={onChange}
    >
      { options.map(option => (
        <FormControlLabel
          key={option.value}
          label={option.label}
          value={option.value}
          control={<Radio color="primary" />}
        />
      ))}
    </RadioGroup>

    {(touched[name] && errors[name])
      ? <FormHelperText className={classes.helperText}>{errors[name]}</FormHelperText>
      : <FormHelperText className={classes.helperText}>{helperText}</FormHelperText>
    }
  </FormControl>
);

Checkbox.propTypes = {
  // style
  classes: PropTypes.object.isRequired,
  // formik
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  // others
  label: PropTypes.string.isRequired,
  row: PropTypes.bool.isRequired,
  helperText: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default withStyles(styles)(Checkbox);
