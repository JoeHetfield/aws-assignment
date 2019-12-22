export default {
  underline: {
    '&:after': {
      borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
    },
    '&:before': {
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    },
    '&:hover:not($disabled):before': {
      borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
      '@media (hover: none)': {
        borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
      },
    },
  },
};
