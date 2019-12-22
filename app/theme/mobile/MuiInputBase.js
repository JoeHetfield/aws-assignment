const placeholder = {
  opacity: 0.3,
  fontSize: 14,
  fontWeight: 300,
};

export default {
  root: {
    fontSize: 16,
    fontWeight: 600,
  },
  input: {
    padding: '6px 0 8px',
    '&::-webkit-input-placeholder': placeholder,
    '&::-moz-placeholder': placeholder, // Firefox 19+
    '&:-ms-input-placeholder': placeholder, // IE 11
    '&::-ms-input-placeholder': placeholder, // Edge
  },
};
