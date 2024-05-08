import Image from 'next/image';

export default function BoxGallery({ data }: any) {
  return !data ? (
    <></>
  ) : (
    <>
      <div className={`flex flex-col md:flex-row gap-5 w-full`}>
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
        <div className={`md:basis-1/2`}>
          <div className={`grid grid-cols-2 gap-4 md:h-full`}>
            <Image
              width='0'
              height='0'
              sizes='100vw'
              className='w-full h-auto'
              src={data?.lt}
              alt='img'
            />
            <Image
              width='0'
              height='0'
              sizes='100vw'
              className='w-full h-auto'
              src={data?.rt}
              alt='img'
            />
            <div></div>
            <Image
              width='0'
              height='0'
              sizes='100vw'
              className='w-full h-auto md:flex md:self-end'
              src={data?.rb}
              alt='img'
            />
          </div>
        </div>
      </div>
    </>
  );
}
