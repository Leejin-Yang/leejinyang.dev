import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import type { Post } from '@/types/post';

const MD_REGEX = /\.md$/;
const postsDirectory = path.join(process.cwd(), '_posts');

export const getPostFileNames = () => {
  return fs.readdirSync(postsDirectory);
};

export const getPostByFileName = (fileName: string, fields: string[] = []) => {
  const filenameWithNoExtension = fileName.replace(MD_REGEX, '');
  const filePath = path.join(postsDirectory, `${filenameWithNoExtension}.md`);
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
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));

  return posts;
};
