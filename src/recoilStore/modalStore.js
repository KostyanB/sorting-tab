import { atom, selectorFamily } from 'recoil';
import env from '../env.json';
const {
    getDataUrl,
    getDataApi
} = env.backend;

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
    get: date =>  async () => {
        const url = `${getDataUrl}${date}${getDataApi}`
        const response = await fetch(url);
        const result = await response.json();
        return result;
    },
});