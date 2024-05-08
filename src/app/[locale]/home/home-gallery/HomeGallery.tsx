'use client';

import { GalleryData } from '@/models/galleryData.interface';
import { useContext, useEffect, useState } from 'react';
import BoxGallery from './box-gallery/BoxGalleryt';
import ColorGallery from './color-gallery/ColorGallery';
import NameGallery from './name-gallery/NameGallery';
import { HomeContext } from '../home.context';
import Loader from '@/ui/design-system/loader/Loader';

export default function HomeGallery({ t }: any) {
  const { filterColor } = useContext(HomeContext);
  const [data, setData] = useState({} as GalleryData);
  const [loading, setLoading] = useState(false);
  const delay = parseInt(process.env.API_DELAY ?? '1', 10);

  useEffect(() => {
    async function getImages() {
      setLoading(true);
      const response = await fetch(`/api/images?color=${filterColor.id}`);
      await new Promise((r) => setTimeout(r, delay));
      const result = await response.json();

      setLoading(false);
      setData(result.data);
    }

    getImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterColor]);

  let empty = null;

  if (loading || filterColor.id === 0) {
    empty = loading ? (
      <>
        <div className={`flex items-center justify-center w-full`}>
          <Loader />
        </div>
      </>
    ) : (
      <>
        <div
          className={`flex font-bold text-xl items-center justify-center p-10 `}
        >
          {t.pleasePickAColor}
        </div>
      </>
    );
  }

  return (
    empty ?? (
      <>
        <div className={`flex flex-col`}>
          <div className={`flex p-10 md:p-20`}>
            <BoxGallery data={data.box} />
          </div>

          <div className={`flex`}>
            <NameGallery
              data={data.main}
              name={data.name}
              color={filterColor.color}
            />
          </div>

          <div className={`flex p-10 md:p-20`}>
            <ColorGallery t={t} data={data.color} slider={data.slider} />
          </div>
        </div>
      </>
    )
  );
}
