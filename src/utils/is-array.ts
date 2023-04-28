export const isArray = (value: any): value is unknown[] => {
  return !!value && value.constructor === Array;
};
