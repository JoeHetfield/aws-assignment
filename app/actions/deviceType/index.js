import { network } from 'utils';

// ////////////////////////////////

const load = (typeId = '') => {
  return network.get(`/api/deviceTypes/${typeId}`);
};

const update = (params) => {
  if (params.typeId) {
    return network.put(`/api/deviceTypes/${params.typeId}`, params);
  }

  return network.post('/api/deviceTypes/', params);
};

// ////////////////////////////////

export default {
  load,
  update,
};
