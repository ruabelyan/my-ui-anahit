import deepMergeFlatten from './deepMergeFlatten';

const createStore = <T>(
  defaultValue: T,
  onValueChange?: (updatedValue: T) => void,
) => {
  let value = defaultValue;

  return {
    value,
    getValue: () => value,
    changeValue: (updatedValue: T) => {
      value = updatedValue;

      onValueChange?.(value);
    },
    updateValue: (updatedValue: Partial<T>) => {
      if (typeof value === 'object' && typeof updatedValue === 'object') {
        value = deepMergeFlatten(value, updatedValue);

        onValueChange?.(value);
      }
    },
    getUpdatedValue: (updatedValue: Partial<T>) =>
      deepMergeFlatten(value, updatedValue),
  };
};

export default createStore;
