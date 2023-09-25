import axios from 'axios';
import {BASE_URL} from '@env';
import {Beer} from '../screens/types';

export const getAllBeers = async () => {
  try {
    const response = await axios.get<Beer[]>(`${BASE_URL}/beers`);

    // console.log(response.data, 'RESPONSE');
    return response.data;
  } catch (e) {
    console.error('Error al realizar la request de todas las birras:', e);
    throw e;
  }
};
