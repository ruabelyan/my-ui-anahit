import { useState } from 'react';

const useControlledValue = <T>(
  defaultValue?: T,
  value?: T,
): [T | null, React.Dispatch<T | null>] => {
  // eslint-disable-next-line prefer-const
  let [activeValue, setActiveValue] = useState<T | null>(defaultValue || null);

  if (value !== undefined) activeValue = value;

  return [activeValue, setActiveValue];
};

export default useControlledValue;
