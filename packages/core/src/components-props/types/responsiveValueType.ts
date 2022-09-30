export type ResponsiveBreakpoints<T> = {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xlg?: T;
};

export type ResponsiveValueType<T> = T | ResponsiveBreakpoints<T>;
