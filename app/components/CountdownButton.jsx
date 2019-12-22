import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Button from '@material-ui/core/Button';

import { Common as commonMsgs } from 'messages';

const CountdownButton = ({
  label,
  values,
  counter,
  children,
  disabled,
  ...props
}) => (
  <Button
    {...props}
    disabled={counter || disabled}
  >
    { counter ? (
      <FormattedMessage
        {...commonMsgs.coolDownSend}
        values={{ seconds: counter }}
      />
    ) : (
      <FormattedMessage
        {...label}
        values={values}
      />
    )}
  </Button>
);

CountdownButton.propTypes = {
  // state
  name: PropTypes.string.isRequired,
  label: PropTypes.object.isRequired,
  values: PropTypes.object.isRequired,
  counter: PropTypes.object,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

CountdownButton.defaultProps = {
  counter: null,
};

const mapStateToProps = (state, { name }) => ({
  counter: state.getIn(['ui', 'misc', 'counters', name]),
});

export default connect(
  mapStateToProps,
  null,
)(CountdownButton);
