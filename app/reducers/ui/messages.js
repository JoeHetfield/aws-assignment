import { fromJS } from 'immutable';
import { Setting } from 'actions';

const messages = (state = fromJS({ en: {} }), { type, payload }) => {
  switch (type) {
    case Setting.LOAD_MESSAGES_SUCCESS:
      return state.set(payload.locale, payload.messages);
    default:
      return state;
  }
};

export default messages;
