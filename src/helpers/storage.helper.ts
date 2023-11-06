export const getValueWithKey = (key: string) => {
  return localStorage.getItem(key);
};

export const setValueWithKey = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export default {
  getValueWithKey,
  setValueWithKey,
};
