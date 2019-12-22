import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Scrollbars } from 'react-custom-scrollbars';

import { createStyled } from 'utils';

const Styled = createStyled({
  root: {
    flex: 1,
  },
});

class Container extends React.Component {
  handleScroll = (event) => {
    const { onScroll } = this.props;
    onScroll(event.target.scrollTop);
  }

  render() {
    const {
      className: classNameProp,
      children,
    } = this.props;


    return (
      <Styled>

        {({ classes }) => {
          const className = classNames(classes.root, classNameProp);

          return (
            <Scrollbars
              autoHide
              autoHeight
              autoHeightMax="100%"
              className={className}
              onScroll={this.handleScroll}
              renderView={({ style, ...props }) => (
                <div
                  {...props}
                  style={{
                    ...style,
                    height: '100%',
                    display: 'flex',
                    overflowX: 'hidden',
                    flexDirection: 'column',
                  }}
                />
              )}
            >
              {children}
            </Scrollbars>
          );
        }}
      </Styled>
    );
  }
}

Container.propTypes = {
  // data
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  // action
  onScroll: PropTypes.func,
};

Container.defaultProps = {
  className: '',
  onScroll: () => {},
};

export default Container;
