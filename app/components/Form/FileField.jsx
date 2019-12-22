import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = ({ palette }) => ({
  file: {
    display: 'none',
  },
  label: {
    // width: spacing.unit * 30,
    // height: spacing.unit * 20,
    flex: 1,
    border: `2px dashed ${palette.divider}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '&:hover': {
      cursor: 'pointer',
      borderColor: palette.primary.main,
    },
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  helperText: {
    color: palette.text.hint,
  },
  preview: {
    margin: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(0, 0, 0, 0)',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.4)',
      color: '#FFFFFF',
    },
  },
  progress: {
    margin: 'auto',
  },
  opacity: {
    opacity: 0.5,
    filter: 'alpha(opacity=50)',
  },
});

class FileField extends React.Component {
  state = {
    loading: false,
    preview: this.props.defaultImg,
  };

  compress = (file) => {
    const {
      maxWidth,
      maxHeight,
    } = this.props;

    const URLObj = global.URL || global.webkitURL;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    const img = new Image();
    img.src = URLObj.createObjectURL(file);
    return new Promise((resolve) => {
      img.onload = () => {
        // 图片原始尺寸
        const originWidth = img.width;
        const originHeight = img.height;
        // 目标尺寸
        let targetWidth = originWidth;
        let targetHeight = originHeight;
        // 图片尺寸超过400x400的限制
        if (originWidth > maxWidth || originHeight > maxHeight) {
          if (originWidth / originHeight > maxWidth / maxHeight) {
            // 更宽，按照宽度限定尺寸
            targetWidth = maxWidth;
            targetHeight = Math.round(maxWidth * (originHeight / originWidth));
          } else {
            targetHeight = maxHeight;
            targetWidth = Math.round(maxHeight * (originWidth / originHeight));
          }
        }
        // canvas对图片进行缩放
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        // 清除画布
        context.clearRect(0, 0, targetWidth, targetHeight);
        // 图片压缩
        context.drawImage(img, 0, 0, targetWidth, targetHeight);

        canvas.toBlob(blob => resolve(blob), 'image/jpeg', 0.9);
      };
    });
  }

  handleFileChange = ({ target: { files } }) => {
    const {
      form: { setFieldValue, setFieldTouched, setFieldError },
      process,
      processSuccess,
      processFailure,
    } = this.props;

    this.setState({ loading: true });

    this
      .compress(files[0])
      .then((file) => {
        this.setState({ preview: URL.createObjectURL(file) });
        return process(file);
      })
      .then((result) => {
        this.setState({ loading: false });
        processSuccess(result, setFieldTouched, setFieldValue);
      })
      .catch((error) => {
        this.setState({ loading: false });
        processFailure(error, setFieldTouched, setFieldError);
      });
  };

  render() {
    const {
      classes,
      form: { touched, errors },
      field,
      accept,
      label,
      labelValues,
      className,
    } = this.props;

    const {
      loading,
      preview,
    } = this.state;

    return (
      <FormControl
        error={errors[field.name]}
        className={className}
      >

        <input
          type="file"
          id={field.name}
          accept={accept}
          className={classes.file}
          onChange={this.handleFileChange}
        />

        <label
          htmlFor={field.name}
          className={classNames(classes.label, loading && classes.opacity)}
          style={{ backgroundImage: `url("${preview}")`, }}
        >
          { preview
            ? (
              <div className={classes.overlay}>
                <Typography
                  color="inherit"
                >
                  <FormattedMessage
                    {...label}
                    values={labelValues}
                  />
                </Typography>
              </div>
            ) : (
              <Typography
                className={classes.helperText}
              >
                <FormattedMessage
                  {...label}
                  values={labelValues}
                />
              </Typography>
            )
          }

          { loading && (
            <div className={classes.overlay}>
              <CircularProgress className={classes.progress} />
            </div>
          )}

        </label>

        { (touched[field.name] && errors[field.name]) && (
          <FormHelperText>
            {(typeof errors[field.name] === 'string')
              ? errors[field.name]
              : <FormattedMessage {...errors[field.name]} />
            }
          </FormHelperText>
        )}

      </FormControl>
    );
  }
}

FileField.defaultProps = {
  accept: 'image/*',
  maxWidth: 1000,
  maxHeight: 1000,
  className: '',
  defaultImg: '',
};

FileField.propTypes = {
  // classes
  classes: PropTypes.object.isRequired,
  // formik
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  // custom
  label: PropTypes.string.isRequired,
  labelValues: PropTypes.object.isRequired,
  accept: PropTypes.string,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
  className: PropTypes.string,
  defaultImg: PropTypes.string,
  // action
  process: PropTypes.func.isRequired,
  processSuccess: PropTypes.func.isRequired,
  processFailure: PropTypes.func.isRequired,
};

export default withStyles(styles)(FileField);
