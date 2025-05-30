import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url || typeof url !== 'string') {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const baseUrl = new URL(url).origin;
    const title = $('title').text();
    const description = $('meta[name=\"description\"]').attr('content') || 'No description';
    const images: string[] = [];
    $('img').each((i, el) => {
      let src = $(el).attr('src');
      if (src) {
        if (src.startsWith('/')) {
          src = `${baseUrl}${src}`;
        } else if (src.startsWith('//')) {
          src = `https:${src}`;
        }
        images.push(src);
      }
    });
    const bodyText = $('body').text().replace(/\\s+/g, ' ').trim().slice(0, 500) + '...';

    res.status(200).json({ title, description, images, bodyText });
  } catch (error: any) {
    res.status(500).json({ error: 'Failed to fetch site info', details: error.message });
  }
}
