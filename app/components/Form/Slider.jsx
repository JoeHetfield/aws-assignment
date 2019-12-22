import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, makeStyles } from '@material-ui/core/styles';
// import { FormattedMessage } from 'react-intl';
import MuiSlider from '@material-ui/core/Slider';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    width: '80%',
    margin: '28px auto 12px',
  },
  yang: {
    color: palette.yang,
  },
  yin: {
    color: palette.yin,
  },
}));

const PrettoSlider = withStyles(({ spacing }) => ({
  root: {
    height: spacing(1),
  },
  thumb: {
    height: spacing(2),
    width: spacing(2),
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: spacing(-0.5),
    marginLeft: spacing(-1.5),
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% - 4px)',
  },
  track: {
    height: spacing(1),
    borderRadius: spacing(0.5),
  },
  rail: {
    height: spacing(1),
    borderRadius: spacing(0.5),
  },
  mark: {
    display: 'none',
  },
  markLabel: {
    top: 28,
  },
  disabled: {
    '& $thumb': {
      marginTop: 0,
    },
  },
}))(MuiSlider);

const Slider = ({
  marks,
  type,
  form,
  field: { name, value },
  onChange,
  ...props
}) => {
  const handleSlider = (event, val) => {
    onChange({
      target: {
        name,
        value: val,
      },
    });
  };

  const valuetext = (values) => `${values}%`;
  const classes = useStyles();

  const rootClass = classNames(
    classes.root,
    type === 'ask' ? classes.yin : classes.yang,
  );

  return (
    <PrettoSlider
      {...props}
      step={1}
      marks={marks}
      value={value}
      className={rootClass}
      valueLabelDisplay="auto"
      getAriaValueText={valuetext}
      onChange={handleSlider}
    />
  );
};

Slider.propTypes = {
  // state
  type: PropTypes.string.isRequired,
  // data
  marks: PropTypes.array.isRequired,
  // formik
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  onChange: () => {},
};

export default Slider;
