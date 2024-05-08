import Image from 'next/image';
import Style from './nameGallery.module.scss';

export default function NameGallery({ data, name, color }: any) {
  return !data ? (
    <></>
  ) : (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 w-full`}>
        <Image
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto md:flex md:self-end'
          src={data?.lt}
          alt='img'
        />
        <div
          style={{ backgroundColor: color }}
          className={`flex items-center justify-center font-semibold text-base ${Style.name}`}
        >
          {name}
        </div>
        <Image
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto md:flex md:self-end'
          src={data?.rt}
          alt='img'
        />
        <Image
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto md:flex md:self-end'
          src={data?.lb}
          alt='img'
        />
        <Image
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto md:flex md:self-end'
          src={data?.cb}
          alt='img'
        />
        <Image
          width='0'
          height='0'
          sizes='100vw'
          className='w-full h-auto md:flex md:self-end'
          src={data?.rb}
          alt='img'
        />
      </div>
    </>
  );
}
