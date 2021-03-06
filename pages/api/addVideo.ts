// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { VideoBody } from '../../typings'

type Data = {
  video: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: VideoBody = JSON.parse(req.body)

  const mutations = {
    mutations: [
      {
        create: {
          _type: 'video',
          text: data.text,
          username: data.username,
          blockVideo: false,
          profileImg: data.profileImg,
          file: data.file,
        },
      },
    ],
  }

  const apiEndpoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`

  const result = await fetch(apiEndpoint, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: 'POST',
  })
  const json = await result.json()

  res.status(200).json({ video: 'Added!' })
}