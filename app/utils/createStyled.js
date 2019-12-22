import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

export default (styles, options) => {
  function Styled(props) {
    const { children, ...other } = props;
    return children(other);
  }
  Styled.propTypes = {
    children: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
  };
  return withStyles(styles, options)(Styled);
};
