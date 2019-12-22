import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import numeral from 'numeral';
import { withStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';

const styles = ({ palette }) => ({
  padding: {
    color: palette.text.secondary,
  },
  yin: {
    color: palette.yin,
  },
  yang: {
    color: palette.yang,
  },
  lightYin: {
    color: lighten(palette.yin, 0.32),
  },
  lightYang: {
    color: lighten(palette.yang, 0.32),
  },
});

const trailingZero = /\.?0*$/;

class ZeroPadLabel extends React.PureComponent {
  render() {
    const {
      classes,
      className: classNameProp,
      sign,
      value,
      color,
      percent,
      padding,
    } = this.props;

    let formattedValue = numeral(value);

    if (percent) {
      formattedValue = formattedValue.multiply(100);
    }

    if (padding) {
      formattedValue = formattedValue.format((`0,0.${'0'.repeat(padding)}`));
    } else {
      formattedValue = formattedValue.value();
    }

    if (formattedValue === 'NaN') return value || null;
    const rootClassName = classNames({
      [classes.yin]: color === 'byValue' ? value < 0 : color === 'yin',
      [classes.yang]: color === 'byValue' ? value >= 0 : color === 'yang',
    }, classNameProp);

    const paddingClassName = classNames(
      classes.padding,
      {
        [classes.lightYin]: color === 'byValue' ? value < 0 : color === 'yin',
        [classes.lightYang]: color === 'byValue' ? value >= 0 : color === 'yang',
      },
    );

    // do this for prevent exponential notation
    const visibleValue = formattedValue.replace(trailingZero, '');
    const [integer, decimal] = visibleValue.split('.');

    const paddingLength = decimal ? padding - decimal.length : padding;
    const actualPaddingLength = paddingLength < 0 ? 0 : paddingLength;

    return (
      <span className={rootClassName}>
        { value >= 0 && sign && '+'}
        {visibleValue}
        <span className={paddingClassName}>
          { !decimal && '.' }
          {'0'.repeat(actualPaddingLength)}
        </span>
        { percent && '%' }
      </span>
    );
  }
}

ZeroPadLabel.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]).isRequired,
  sign: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'yin', 'yang', 'byValue']),
  percent: PropTypes.bool,
  padding: PropTypes.number,
};

ZeroPadLabel.defaultProps = {
  sign: false,
  color: 'default',
  percent: false,
  padding: 2,
  className: '',
};

export default withStyles(styles)(ZeroPadLabel);
