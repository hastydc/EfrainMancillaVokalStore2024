import { ResponseData } from '@/models/responseData.interface';
import { NextApiRequest, NextApiResponse } from 'next';
import { cookies } from 'next/headers';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const nick: string = req.query.nick?.toString() ?? '';
  const password: string = req.query.password?.toString() ?? '';
  let response = true;

  if (nick !== process.env.NICK || password !== process.env.PASSWORD) {
    response = false;
  }

  res.status(200).json({ data: response });
}
