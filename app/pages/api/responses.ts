import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const RESPONSE_URL = process.env.NEXT_PUBLIC_RESPONSE_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req;

  try {
    let response;
    switch (method) {
      case 'GET':
        response = await axios.get(RESPONSE_URL!, { params: query });
        break;
      case 'POST':
        response = await axios.post(RESPONSE_URL!, body, {
          headers: { 'Content-Type': 'application/json', charset: 'utf-8' },
        });
        break;
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${method} Not Allowed`);
        return;
    }
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data from response API:', error);
    res.status(500).json({ message: 'Error fetching data from API' });
  }
}
