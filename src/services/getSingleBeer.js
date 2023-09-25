import axios from 'axios';
import {BASE_URL} from '@env';

export const getSingleBeer = async id => {
  try {
    const response = await axios.get(`${BASE_URL}/beers/${id}`);

    return response.data;
  } catch (e) {
    console.log('Error en signle beer', e);
    throw e;
  }
};
