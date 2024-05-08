'use client';

import { useContext } from 'react';
import SelectedFilter from './selected-filter/SelectedFilter';
import { FilterData } from '@/models/filterData.interface';
import { HomeContext } from '../../home.context';

export default function SelectedFilters({ t }: any) {
  const {
    filterColor,
    setFilterColor,
    filterStyle,
    setFilterStyle,
    filterRoom,
    setFilterRoom,
  } = useContext(HomeContext);

  const defaultData: FilterData = { id: 0, label: t.choose };

  function clearAll() {
    setFilterColor(defaultData);
    setFilterStyle(defaultData);
    setFilterRoom(defaultData);
  }

  const empty =
    filterColor?.id === 0 && filterStyle?.id === 0 && filterRoom?.id === 0;

  return empty ? (
    <></>
  ) : (
    <>
      <div
        className={`flex flex-col md:flex-row gap-4 p-10 md:p-0 md:pt-5 md:pb-8 md:px-20`}
      >
        {filterColor?.id === 0 ? (
          <></>
        ) : (
          <div>
            <SelectedFilter
              t={t}
              data={filterColor}
              clear={() => setFilterColor(defaultData)}
            />
          </div>
        )}

        {filterStyle?.id === 0 ? (
          <></>
        ) : (
          <div>
            <SelectedFilter
              t={t}
              data={filterStyle}
              clear={() => setFilterStyle(defaultData)}
            />
          </div>
        )}

        {filterRoom?.id === 0 ? (
          <></>
        ) : (
          <div>
            <SelectedFilter
              t={t}
              data={filterRoom}
              clear={() => setFilterRoom(defaultData)}
            />
          </div>
        )}

        <div>
          <SelectedFilter t={t} clearAll={true} clear={clearAll} />
        </div>
      </div>
    </>
  );
}
