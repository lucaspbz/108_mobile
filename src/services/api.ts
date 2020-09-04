import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend108hour.herokuapp.com',
});

export const statesApi = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
});

export default api;
