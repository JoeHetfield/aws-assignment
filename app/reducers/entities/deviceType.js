import { DeviceType } from 'actions';

const deviceType = (state = [], { type, payload }) => {
  switch (type) {
    case DeviceType.LOAD_SUCCESS:
      return payload;
    default:
      return state;
  }
};

export default deviceType;
