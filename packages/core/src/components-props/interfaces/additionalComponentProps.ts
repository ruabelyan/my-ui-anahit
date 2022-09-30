import CSS from 'csstype';

export interface AdditionalComponentProps {
  cursor?: CSS.Properties['cursor'];
  pointerEvents?: CSS.Properties['pointerEvents'];
  zIndex?: CSS.Properties['zIndex'];
  overflow?: CSS.Properties['overflow'];
  className?: string;
  disableDefaultStyles?: boolean;
}
