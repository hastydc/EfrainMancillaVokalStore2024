'use client';

import { FilterData } from '@/models/filterData.interface';
import Filter from './filter/Filter';
import { useContext, useEffect } from 'react';
import Style from './filters.module.scss';
import { HomeContext } from '../../home.context';
import { useSearchParams } from 'next/navigation';

export default function Filters({ t }: any) {
  const params = useSearchParams();
  const {
    filterColor,
    setFilterColor,
    filterStyle,
    setFilterStyle,
    filterRoom,
    setFilterRoom,
  } = useContext(HomeContext);

  const defaultData: FilterData = { id: 0, label: t.choose };

  const colorFilters: FilterData[] = [
    defaultData,
    {
      id: 1,
      color: '#212121',
      label: t.black,
    },
    {
      id: 2,
      color: '#d9d9d9',
      label: t.white,
    },
  ];

  const styleFilters: FilterData[] = [
    defaultData,
    {
      id: 1,
      label: t.style,
    },
  ];

  const roomFilters: FilterData[] = [
    defaultData,
    {
      id: 1,
      label: t.room,
    },
  ];

  const initFilters = () => {
    const queryId = params!.get('color') ?? '0';
    const base = colorFilters.find(
      ({ id }: FilterData) => id.toString() === queryId.toString()
    );
    setFilterColor(base);
    setFilterStyle(defaultData);
    setFilterRoom(defaultData);
  };

  useEffect(() => {
    initFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className={`flex flex-col md:flex-row gap-5 md:gap-10 p-10 md:p-0 md:pt-5 md:pb-8 md:px-20 z-10 ${Style.filters}`}
      >
        <div className={`flex w-full md:w-auto`}>
          <Filter
            data={colorFilters}
            current={filterColor}
            set={setFilterColor}
          />
        </div>

        <div className={`flex w-full md:w-auto`}>
          <Filter
            data={styleFilters}
            current={filterStyle}
            set={setFilterStyle}
          />
        </div>

        <div className={`flex w-full md:w-auto`}>
          <Filter data={roomFilters} current={filterRoom} set={setFilterRoom} />
        </div>
      </div>
    </>
  );
}
