import type { NextApiRequest, NextApiResponse } from 'next'
import data from '../reviews.json';



interface Data {
  reviews: Record<string, string>[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ reviews: data })
}
