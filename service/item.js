import axios from 'axios';
import { URL_ITEMS } from '../definitions/contans.js';
import { mapperItems } from '../util/util.js';

export const fetchItemsByQuery = async query => {
  try {
    const { data } = await axios.get(`${URL_ITEMS}${query}&&limit=4`)
    return mapperItems(data.results);
  } catch (error) {
    return error
  }
} 