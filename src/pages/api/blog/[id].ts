import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import blogs from '../../../data/blogs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Find the blog by ID
  const blog = blogs.find(blog => blog.id === parseInt(id as string));

  if (!blog) {
    return res.status(404).json({ message: 'Blog not found' });
  }

  try {
    const response = await axios.get(blog.url);
    const markdownContent = response.data;
    res.status(200).json({ markdownContent });
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch markdown content' });
  }
}