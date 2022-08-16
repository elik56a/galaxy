export const getItem = <T>(key: string): T | null => {
  const item = localStorage.getItem(key);
  if (!!item) return JSON.parse(item);
  return null;
};

export const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export const setItem = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};
