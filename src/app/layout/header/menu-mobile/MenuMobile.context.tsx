import { createContext, useState } from 'react';

export const MenuMobileContext = createContext({
  open: false,
  setOpen: (value: any) => value,
});

export const MenuMobileContextProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  const value = {
    open,
    setOpen,
  };

  return (
    <>
      <MenuMobileContext.Provider value={value}>
        {children}
      </MenuMobileContext.Provider>
    </>
  );
};

export default MenuMobileContextProvider;
