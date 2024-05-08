'use client';

import { useContext } from 'react';
import { MenuMobileContext } from '../menu-mobile/MenuMobile.context';
import { useRouter } from 'next/navigation';
import Style from './menuItem.module.scss';

export default function MenuItem({ data }: any) {
  const { setOpen } = useContext(MenuMobileContext);
  const router = useRouter();

  return (
    <>
      <li
        className={`flex w-full h-full justify-center cursor-pointer bg-vokal-white z-10 ${Style.menuItem} transition ease-in-out border-1 border-b-vokal-black md:border-1 md:border-vokal-white md:hover:border-b-vokal-black`}
        onClick={() => {
          setOpen(false);
          router.push(data.link);
        }}
      >
        <span className={`flex self-center text-sm`}>{data.label}</span>
      </li>
    </>
  );
}
