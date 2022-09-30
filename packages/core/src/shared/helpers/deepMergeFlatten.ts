const deepMergeFlatten = <T extends Record<string, any>>(
  obj1: T,
  obj2: Partial<T> | T,
): T => {
  const keys = Object.keys(obj2);

  let nextObj = { ...obj1 };

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const value = obj2[key];

    if (typeof value === 'object' && value !== null)
      nextObj = { ...nextObj, [key]: deepMergeFlatten(nextObj[key], value) };
    else nextObj = { ...nextObj, [key]: value };
  }

  return nextObj;
};

export default deepMergeFlatten;
