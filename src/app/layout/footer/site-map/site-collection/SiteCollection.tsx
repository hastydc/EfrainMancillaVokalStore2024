'use client';

import { MenuItemData } from '@/models/menuItemData.interface';
import { useRouter } from 'next/navigation';

export default function SiteCollection({ data, title }: any) {
  const router = useRouter();

  return (
    <>
      <div className={`flex flex-col text-base gap-4`}>
        <div className={`flex font-bold`}>{title}</div>

        <div className={`flex font-normal flex-col gap-2`}>
          {data.map(({ label, link }: MenuItemData, index: number) => (
            <span
              className={`cursor-pointer`}
              key={`midsc-${index}`}
              onClick={() => router.push(link)}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
