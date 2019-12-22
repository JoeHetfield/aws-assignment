import { Bootstrap, Session } from 'actions';

const booting = (state = true, { type }) => {
  switch (type) {
    case Bootstrap.SUCCESS:
      return false;
    // case Session.SIGNIN_SUCCESS:
    //   return true;
    default:
      return state;
  }
};

export default booting;
