/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
import api from './api';

export const createUnit = async (body) => {
  return await api.post('/ims/unit/save', body, {
    headers: {
      'X-Tenant': 'gayashan',
    },
  });
};

export const getUnits = async () => {
  return await api.get('/ims/unit/list', {
    headers: {
      'X-Tenant': 'gayashan',
    },
  });
};

export const getUnit = async (unitId) => {
  return await api.get(`/ims/unit/edit/${unitId}`, {
    headers: {
      'X-Tenant': 'gayashan',
    },
  });
};

export const deleteUnit = async (unitId) => {
  return await api.delete(`ims/unit/${unitId}`, {
    headers: {
      'X-Tenant': 'gayashan',
    },
  });
};

export const updateUnit = async (unitId, body) => {
  return await api.put(`ims/unit/update/${unitId}`, body, {
    headers: {
      'X-Tenant': 'gayashan',
    },
  });
};
