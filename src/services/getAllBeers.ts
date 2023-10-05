import {instance} from './api';

export const getAllBeers = async () => {
  try {
    const response = await instance.get('/beers');

    return response.data;
  } catch (e) {
    console.error('Error al realizar la request de todas las birras:', e);
    throw e;
  }
};
