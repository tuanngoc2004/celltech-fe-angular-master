import {cloneDeep} from 'lodash';

export const storage = {
  set(key: string, value: any) {
    try {
      const cloneValue = cloneDeep(value);
      localStorage.setItem(key, JSON.stringify(cloneValue));
    } catch (e) {
      console.warn('localStorage', e);
    }
  },

  get(key: string) {
    try {
      return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) || '') : null;
    } catch (e) {
      console.warn('localStorage', e);
    }
  },

  remove(key: string) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
};
