export const fadeStyle = (fadeIn: Boolean) => {
  return fadeIn
    ? {
        opacity: 1,
        visibility: 'visible',
        transition: 'all .3s ease',
      }
    : {
        opacity: 0,
        visibility: 'hidden',
        transition: 'all .3s ease',
      };
};
