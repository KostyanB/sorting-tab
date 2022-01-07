import { atom, selectorFamily } from 'recoil';
import env from '../env.json';
const { getModalDataUrl, getModalDataApi } = env.backend;

export const activeDateState = atom({
  key: 'activeDateState',
  default: '',
});

export const openModalState = atom({
  key: 'openModalState',
  default: false,
});

export const modalDataQuery = selectorFamily({
  key: 'modalDataQuery',
  get: date => async () => {
    const url = `${getModalDataUrl}${date}${getModalDataApi}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  },
});
