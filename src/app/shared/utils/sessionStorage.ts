export const session = {
  set(key: string, value: any) {
    try {
      sessionStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('sessionStorage', e);
    }
  },

  get(key: string) {
    try {
      return JSON.parse(sessionStorage.getItem(key) || '');
    } catch (e) {
    }
  },

  remove(key: string) {
    sessionStorage.removeItem(key);
  },

  clear() {
    sessionStorage.clear();
  },
};
