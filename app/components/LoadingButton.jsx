import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Common as commonMsgs } from 'messages';

const useStyles = makeStyles(() => ({
  wrapper: {
    position: 'relative',
  },
  fullWidth: {
    width: '100%',
  },
  button: {
    margin: 0,
  },
  progress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const LoadingButton = ({
  label,
  labelValues,
  disabled,
  fullWidth,
  isLoading,
  buttonClass,
  wrapperClass,
  ...props
}) => {
  const style = useStyles();

  return (
    <div className={classNames(style.wrapper, fullWidth && style.fullWidth, wrapperClass)}>

      <Button
        {...props}
        fullWidth
        disabled={isLoading || disabled}
        className={classNames(style.button, buttonClass)}
      >
        {(() => {
          if (isLoading) {
            return <FormattedMessage {...commonMsgs.pleaseWait} />;
          }

          if ((typeof label === 'string') || React.isValidElement(label)) {
            return label;
          }

          if (!label || !label.id) {
            return 'label missing';
          }

          if (!labelValues) {
            return <FormattedMessage {...label} />;
          }

          return <FormattedMessage {...label} values={labelValues} />;
        })()}
      </Button>

      { isLoading && (
        <CircularProgress
          size={24}
          className={style.progress}
        />
      )}

    </div>
  );
};

LoadingButton.propTypes = {
  // custom
  label: PropTypes.object.isRequired,
  labelValues: PropTypes.object,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  buttonClass: PropTypes.string,
  wrapperClass: PropTypes.string,
};

LoadingButton.defaultProps = {
  disabled: null,
  labelValues: null,
  buttonClass: '',
  wrapperClass: '',
};

export default LoadingButton;
