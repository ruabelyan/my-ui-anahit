import { useEffect } from 'react';

const detectOutClick = (ref, outClick, onClose, setPopUpOpened) => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const e = event.target as HTMLElement;

      if (
        outClick &&
        ref.current &&
        !(ref.current as unknown as HTMLElement).contains(e)
      ) {
        onClose();
        setPopUpOpened(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, outClick]);
};

export default detectOutClick;
