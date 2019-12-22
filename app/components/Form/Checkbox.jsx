import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = ({ spacing: { unit }, palette: { common: color } }) => ({
  subheading: {
    paddingTop: unit * 2,
    color: color.lightBlack,
  },
  labelRoot: {
    marginLeft: 0,
    marginRight: 0,
  },
  helperText: {
    fontSize: 12,
    margin: `0 ${unit}px  ${unit}px`,
  },
});

const Checkbox = ({
  form: { touched, errors, setFieldValue },
  field,
  label,
  row = true,
  classes,
  options,
  helperText,
}) => (
  <FormControl
    error={touched[field.name] && errors[field.name]}
  >

    { label && (
      <Typography
        gutterBottom
        type="subtitle1"
        className={classes.subheading}
      >
        {label}
      </Typography>
    )}

    { options.length > 1
      ? (
        <FormGroup row={row}>
          { options.map((option, index) => (
            <FormControlLabel
              key={option.value}
              label={option.label}
              control={(
                <MuiCheckbox
                  name={`${field.name}[${index}]`}
                  value={option.value}
                  disabled={option.disabled}
                  checked={field.value.indexOf(option.value) !== -1}
                  onChange={(e) => {
                    const { checked, value } = e.target;
                    const newValue = [...field.value];
                    if (checked) {
                      newValue.push(value);
                    } else {
                      newValue.splice(newValue.indexOf(value), 1);
                    }
                    return field.onChange(newValue);
                  }}
                />
              )}
            />
          ))}
        </FormGroup>
      ) : (
        <FormControlLabel
          label={options[0].label}
          classes={{ root: classes.labelRoot }}
          control={(
            <MuiCheckbox
              name={field.name}
              value={options[0].value}
              checked={field.value === options[0].value}
              onChange={(e) => {
                const { checked, value } = e.target;
                setFieldValue(field.name, checked && value);
              }}
            />
          )}
        />
      )
    }

    {(touched[field.name] && errors[field.name])
      ? (
        <FormHelperText className={classes.helperText}>
          <FormattedMessage {...errors[field.name]} />
        </FormHelperText>
      ) : helperText && (
        <FormHelperText className={classes.helperText}>
          {helperText}
        </FormHelperText>
      )
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
  label: PropTypes.string,
  row: PropTypes.bool,
  helperText: PropTypes.string,
  iconSize: PropTypes.number,
  options: PropTypes.array.isRequired,
};

export default withStyles(styles)(Checkbox);
