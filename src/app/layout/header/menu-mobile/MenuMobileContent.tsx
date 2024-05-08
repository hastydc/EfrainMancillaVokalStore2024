'use client';

import { useContext, useEffect, useState } from 'react';
import MenuIcon from './menu-icon/MenuIcon';
import Style from './menuMobile.module.scss';
import { MenuMobileContext } from './MenuMobile.context';
import Menu from '../menu/Menu';

export default function MenuMobile({ t }: any) {
  const [className, setClassName] = useState('');
  const { open, setOpen } = useContext(MenuMobileContext);

  useEffect(() => {
    setClassName(open ? Style.visible : '');
  }, [open]);

  return (
    <>
      <div className={`flex w-8`} onClick={() => setOpen(!open)}>
        <MenuIcon open={open} />
      </div>

      <div className={`flex flex-col ${Style.menuMobileWrapper} ${className}`}>
        <nav
          className={`flex md:flex md:flex-1 flex-col md:flex-row justify-center h-full`}
        >
          <Menu t={t} all={true} />
        </nav>
      </div>
    </>
  );
}
