'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { HomeContext } from '../../../home.context';
import Style from './colorPantone.module.scss';
import Pantone from './pantone/Pantone';

export default function ColorPantone({ data, t }: any) {
  const { filterColor } = useContext(HomeContext);

  return !data ? (
    <></>
  ) : (
    <>
      <div className={`flex flex-col md:flex-row gap-5 w-full`}>
        <div className={`md:basis-1/2 md:flex-col md:self-stretch`}>
          <div className={`grid grid-rows-1 md:grid-rows-2 h-full`}>
            <div className={`hidden md:grid`} />
            <div className={`grid grid-cols-2 gap-4 md:h-full`}>
              <div
                className={`w-full h-full flex self-end `}
                style={{ background: filterColor?.color }}
              >
                <Pantone t={t} label={filterColor.label} />
              </div>
              <Image
                width='0'
                height='0'
                sizes='100vh'
                className={`w-full h-auto md:flex md:self-end ${Style.fullHeight}`}
                src={data?.mini}
                alt='img'
              />
            </div>
          </div>
        </div>
        <div className={`md:basis-1/2 `}>
          <Image
            width='0'
            height='0'
            sizes='100vw'
            className='w-full h-auto'
            src={data?.main}
            alt='img'
          />
        </div>
      </div>
    </>
  );
}
