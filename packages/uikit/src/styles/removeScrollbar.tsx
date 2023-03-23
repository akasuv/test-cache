export const removeScrollbar = () => {
  return {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  };
};
