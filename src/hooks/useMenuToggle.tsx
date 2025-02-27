import { useState, useCallback } from 'react';

const useMenuToggle = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return { menuOpen, handleMenuToggle };
};

export default useMenuToggle;
