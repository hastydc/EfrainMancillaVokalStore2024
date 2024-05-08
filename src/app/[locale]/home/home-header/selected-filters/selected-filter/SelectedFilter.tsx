import Image from 'next/image';
import Style from './selectedFilter.module.scss';

export default function SelectedFilter({ clearAll, data, clear, t }: any) {
  const label = clearAll ? t?.clearAllFilters : `${t?.off}-${data.label}`;

  return (
    <>
      <div
        className={`flex flex-row gap-6 items-center justify-center px-5 py-3 relative ${
          !clearAll ? Style.border : ''
        }`}
      >
        <div className={`flex font-semibold`}>{label}</div>
        <div
          className={`flex absolute md:relative top-0 bottom-0 right-3 m-auto w-4 h-4`}
          onClick={() => clear()}
        >
          <Image
            width='0'
            height='0'
            sizes='100vw'
            className='w-4 h-4 md:flex md:self-end cursor-pointer'
            src={`/icons/icon-cross.png`}
            alt='close'
          />
        </div>
      </div>
    </>
  );
}
