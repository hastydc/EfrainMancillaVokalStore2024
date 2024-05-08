import { FilterData } from '@/models/filterData.interface';
import FilterOption from './filter-option/FilterOption';
import { useState } from 'react';
import Image from 'next/image';
import Style from './filter.module.scss';

export default function Filter({ data, current, set }: any) {
  const [options, setOptions] = useState(false);

  return (
    <>
      <div
        className={`flex flex-col gap-1 relative ${Style.filter} ${Style.filterHeight}`}
      >
        <div className={`flex flex-row w-full h-full ${Style.filterBorder}`}>
          <div className={`flex flex-1 items-center justify-center`}>
            <FilterOption data={current} />
          </div>

          <div
            className={`flex w-14 items-center justify-center cursor-pointer ${Style.icon}`}
            onClick={() => setOptions(!options)}
          >
            <Image
              width={20}
              height={10}
              src={`/icons/icon-filter.png`}
              alt='icon'
              className={`h-2.5  ${options ? Style.open : ''}`}
            />
          </div>
        </div>

        <div
          className={`${
            !options ? 'hidden' : ''
          } absolute w-full bg-vokal-white top-full`}
        >
          {data
            .filter(({ id }: FilterData) => id !== 0)
            .map((data: FilterData) => (
              <div
                key={`fop-${data.id}`}
                className={`flex ${Style.filterBox} items-center justify-center cursor-pointer relative z-10 pr-12`}
                onClick={() => {
                  setOptions(false);
                  set(data);
                }}
              >
                <FilterOption data={data} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
