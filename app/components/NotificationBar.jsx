import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';

import { Notifications } from 'actions';

class NotificationBar extends React.Component {
  componentDidUpdate() {
    const {
      open,
      messages,
      openSnack,
    } = this.props;

    if (!open && messages.first()) {
      openSnack();
    }
  }

  render() {
    const {
      open,
      messages,
      pop,
      closeSnack,
    } = this.props;

    const message = messages.first();

    return (
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        autoHideDuration={3000}
        onClose={closeSnack}
        onExited={pop}
        message={message}
      />
    );
  }
}

NotificationBar.propTypes = {
  messages: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  pop: PropTypes.func.isRequired,
  openSnack: PropTypes.func.isRequired,
  closeSnack: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  open: state.getIn(['ui', 'notifications', 'open']),
  messages: state.getIn(['ui', 'notifications', 'messages']),
});

const mapDispatchToProps = {
  pop: Notifications.pop,
  openSnack: Notifications.open,
  closeSnack: Notifications.close,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationBar);
