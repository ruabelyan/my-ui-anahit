import { useCallback, useMemo, useState } from 'react';

const useToggle = (defaultValue = false) => {
  const [booleanValue, setBooleanValue] = useState(defaultValue);

  const toggler = useCallback(
    () => setBooleanValue(prevValue => !prevValue),
    [],
  );

  return useMemo<[boolean, () => void]>(
    () => [booleanValue, toggler],
    [booleanValue],
  );
};

export default useToggle;
