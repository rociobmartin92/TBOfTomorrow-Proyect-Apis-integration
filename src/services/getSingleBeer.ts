import {instance} from './api';

export const getSingleBeer = async (id: number) => {
  try {
    const response = await instance.get(`/beers/${id}`);

    return response.data;
  } catch (e) {
    console.log('Error en signle beer', e);
    throw e;
  }
};
