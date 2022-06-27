// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Video } from '../../typings'
import { groq } from 'next-sanity'

const feedQuery = groq`
  *[_type == "video" && !blockVideo]{
      _id,
      ...
  } | order(_createdAt desc)
`

type Data = {
  videos: Video[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const videos: Video[] = await sanityClient.fetch(feedQuery)
  console.log('🚀 ~ file: getTweets.ts ~ line 23 ~ videos', videos)
  res.status(200).json({ videos })
}