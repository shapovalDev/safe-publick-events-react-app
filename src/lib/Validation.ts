export const isValid = (object: any): boolean => {
  const values = Object.values(object);
  return values.some((value: any) => value === '' || value === null);
};
