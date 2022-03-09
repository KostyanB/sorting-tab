import { atom, selectorFamily } from 'recoil';
import env from '../env.json';
import initialStates from './initialStates';

const { getModalDataUrl, getModalDataApi } = env.backend;
const { initActiveDate } = initialStates.initModal;

export const activeDateState = atom({
  key: 'activeDateState',
  default: initActiveDate,
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
