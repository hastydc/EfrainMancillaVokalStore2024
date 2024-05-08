'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Style from './homeLink.module.scss';

export default function HomeLink({ question, answer, link }: any) {
  const router = useRouter();

  return (
    <>
      <div
        className={`flex flex-col md:flex-row gap-2 p-8 md:py-14 w-full cursor-pointer justify-center ${Style.homeLink}`}
        onClick={() => router.push(link)}
      >
        <span className={`flex font-bold`}>{question}</span>
        <span className={`flex font-normal`}>{answer}</span>
        <span className={`relative${Style.icon}`}>
          <Image
            width='0'
            height='0'
            sizes='100vw'
            className={`relative ${Style.icon}`}
            src='/icons/icon-arrow.png'
            alt='go'
          />
        </span>
      </div>
    </>
  );
}
