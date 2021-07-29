import { baseFetch } from '../utils';

export const getCalcData = () => baseFetch.get('/eddef1e4d9af278a43a0').then((res) => res.data);
