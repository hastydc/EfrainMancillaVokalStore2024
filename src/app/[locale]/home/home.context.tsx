'use client';

import { createContext, useState } from 'react';

export const HomeContext = createContext({
  filterColor: { id: 0, label: '', color: '' },
  setFilterColor: (value: any) => value,

  filterStyle: { id: 0, label: '' },
  setFilterStyle: (value: any) => value,

  filterRoom: { id: 0, label: '' },
  setFilterRoom: (value: any) => value,
});

export const HomeContextProvider = ({ children }: any) => {
  const [filterColor, setFilterColor] = useState({
    id: 0,
    label: '',
    color: '',
  });
  const [filterStyle, setFilterStyle] = useState({ id: 0, label: '' });
  const [filterRoom, setFilterRoom] = useState({ id: 0, label: '' });

  const value = {
    filterColor,
    setFilterColor,
    filterStyle,
    setFilterStyle,
    filterRoom,
    setFilterRoom,
  };

  return (
    <>
      <HomeContext.Provider value={value}>{children}</HomeContext.Provider>
    </>
  );
};

export default HomeContextProvider;
