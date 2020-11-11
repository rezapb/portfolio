export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';

export const openMenu = () => {
  return {
    type: OPEN
  };
};

export const closeMenu = () => {
  return {
    type: CLOSE
  };
};
