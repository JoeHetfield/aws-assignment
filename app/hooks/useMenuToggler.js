import { useState } from 'react';

export default (initEl) => {
  const [anchorEl, setAnchorEl] = useState(initEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  return [anchorEl, handleClick, handleClose];
};
