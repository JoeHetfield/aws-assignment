import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

import AddIcon from '@material-ui/icons/Add';
import InboxIcon from '@material-ui/icons/Inbox';
import WarningIcon from '@material-ui/icons/Warning';

import { Common as commonMsgs } from 'messages';

const styles = ({ spacing }) => ({
  fade: {
    margin: 'auto',
    padding: spacing(4),
    textAlign: 'center',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  root: {
  },
  icon: {
    fontSize: 48,
  },
  message: {
    width: '100%',
  },
  gutter: {
    marginTop: spacing(1),
  },
});

const Placeholder = ({
  classes,
  className: classNameProp,
  empty,
  upload,
  warning,
  loading,
  message,
  messageValues,
  note,
  noteValues,
  children,
}) => {
  const messageClass = classNames(
    classes.message,
    {
      [classes.gutter]: (loading && message) || (empty && message) || (warning && message),
    },
  );

  return (
    <Fade
      in
      unmountOnExit
      className={classNames(classes.fade, classNameProp)}
      style={{ transitionDelay: loading ? '800ms' : '0ms' }}
    >
      <div className={classes.root}>

        { loading && <CircularProgress /> }

        { empty && (
          <>
            <InboxIcon
              color="disabled"
              className={classes.icon}
            />

            <Typography
              gutterBottom
              color="textSecondary"
              variant="body1"
              className={messageClass}
            >
              <FormattedMessage
                {...commonMsgs.phrase.noRecords}
              />
            </Typography>
          </>
        )}

        { upload && (
          <AddIcon
            color="disabled"
            className={classes.icon}
          />
        )}

        { warning && (
          <WarningIcon
            color="disabled"
            className={classes.icon}
          />
        )}

        { message && (
          <Typography
            gutterBottom
            variant="body1"
            className={messageClass}
          >
            {(() => {
              if ((typeof message === 'string') || React.isValidElement(message)) {
                return message;
              }

              if (!message.id) {
                return 'message missing';
              }

              return (
                <FormattedMessage
                  {...message}
                  values={messageValues}
                />
              );
            })()}
          </Typography>
        )}

        { note && (
          <Typography
            gutterBottom
            variant="caption"
            className={messageClass}
          >
            {(() => {
              if ((typeof note === 'string') || React.isValidElement(note)) {
                return note;
              }

              if (!note.id) {
                return 'note missing';
              }

              return (
                <FormattedMessage
                  {...note}
                  values={noteValues}
                />
              );
            })()}
          </Typography>
        )}

        {children}

      </div>
    </Fade>
  );
};

Placeholder.propTypes = {
  // style
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  // state
  empty: PropTypes.bool,
  upload: PropTypes.bool,
  warning: PropTypes.bool,
  loading: PropTypes.bool,
  message: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  messageValues: PropTypes.string,
  note: PropTypes.string,
  noteValues: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
  ]),
};

export default withStyles(styles)(Placeholder);
