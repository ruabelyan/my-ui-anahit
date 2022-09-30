import { ReactNode } from 'react';

export interface DynamicComponent<T> {
  component?:
    | ((props: T & { children: ReactNode }) => JSX.Element)
    | keyof JSX.IntrinsicElements;
}

export interface DynamicComponentFunction<T> {
  component?: (props: T & { children: ReactNode }) => JSX.Element;
}
