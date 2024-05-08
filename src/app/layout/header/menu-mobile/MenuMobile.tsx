'use client';

import MenuMobileContent from './MenuMobileContent';
import MenuMobileContextProvider from './MenuMobile.context';

export default function MenuMobile({ t }: any) {
  return (
    <>
      <MenuMobileContextProvider>
        <MenuMobileContent t={t} />
      </MenuMobileContextProvider>
    </>
  );
}
