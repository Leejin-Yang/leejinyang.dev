import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import type { Post } from '@/types/post';

// type DataKeys = 'title' | 'date' | 'description' | 'thumbnail' | 'category' | 'slug';

const postsDirectory = path.join(process.cwd(), '_posts');

const getPostFileNames = () => {
  return fs.readdirSync(postsDirectory);
};

const getPostByFileName = (fileName: string, fields: string[] = []) => {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
  const { data, content } = matter(fileContent);

  const items: Post = {};

  fields.forEach((field) => {
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'data') {
      items[field] = data;
    }
    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllPosts = (fields: string[] = []) => {
  const fileNames = getPostFileNames();

  const posts = fileNames
    .map((fileName) => getPostByFileName(fileName, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
};
