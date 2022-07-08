export const getLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const setLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export function removeLocalStorageItem(...arg: any) {
  for (let i = 0; i < arguments.length; i += 1) localStorage.removeItem(arguments[i]);
}
