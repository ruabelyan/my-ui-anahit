import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children: ReactNode;
}

function Portal({ children }: PortalProps) {
  return ReactDOM.createPortal(children, document.body);
}

export default Portal;
