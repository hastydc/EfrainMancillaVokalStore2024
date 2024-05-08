import { GalleryData } from '@/models/galleryData.interface';
import { ResponseData } from '@/models/responseData.interface';
import type { NextApiRequest, NextApiResponse } from 'next';

const db: { [key: string]: GalleryData } = {
  '1': {
    box: {
      lt: '/imgs/1/img-box-lt.png',
      main: '/imgs/1/img-box-main.png',
      rb: '/imgs/1/img-box-rb.png',
      rt: '/imgs/1/img-box-rt.png',
    },
    color: {
      main: '/imgs/1/img-color-main.png',
      mini: '/imgs/1/img-color-mini.png',
    },
    main: {
      cb: '/imgs/1/img-name-cb.png',
      lb: '/imgs/1/img-name-lb.png',
      lt: '/imgs/1/img-name-lt.png',
      rb: '/imgs/1/img-name-rb.png',
      rt: '/imgs/1/img-name-rt.png',
    },
    slider: [
      '/imgs/1/img-slider-1.png',
      '/imgs/1/img-slider-2.png',
      '/imgs/1/img-slider-3.png',
      '/imgs/1/img-slider-4.png',
      '/imgs/1/img-slider-5.png',
    ],
    name: 'Mysterious Black',
  },
  '2': {
    box: {
      lt: '/imgs/2/img-box-lt.png',
      main: '/imgs/2/img-box-main.png',
      rb: '/imgs/2/img-box-rb.png',
      rt: '/imgs/2/img-box-rt.png',
    },
    color: {
      main: '/imgs/2/img-color-main.png',
      mini: '/imgs/2/img-color-mini.png',
    },
    main: {
      cb: '/imgs/2/img-name-cb.png',
      lb: '/imgs/2/img-name-lb.png',
      lt: '/imgs/2/img-name-lt.png',
      rb: '/imgs/2/img-name-rb.png',
      rt: '/imgs/2/img-name-rt.png',
    },
    slider: [
      '/imgs/2/img-slider-1.png',
      '/imgs/2/img-slider-2.png',
      '/imgs/2/img-slider-3.png',
      '/imgs/2/img-slider-4.png',
    ],
    name: 'Happy beige',
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const id: string = req.query.color?.toString() ?? '1';

  res.status(200).json({ data: db[id] ?? db['1'] });
}
