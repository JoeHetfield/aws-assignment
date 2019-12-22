import { useState } from 'react';

export default (initEl) => {
  const [open, setOpen] = useState(initEl);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return [open, handleOpen, handleClose];
};
