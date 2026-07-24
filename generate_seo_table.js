const fs = require('fs');

// We'll just read blogData for now to generate the blog section
const blogDataRaw = fs.readFileSync('utils/blogData.ts', 'utf-8');
const blogPostsMatch = blogDataRaw.match(/export const blogPosts: BlogPost\[\] = \[([\s\S]*?)\];/);

let blogPostsStr = blogPostsMatch ? blogPostsMatch[0] : '';
// Remove the type declaration to just get the array
blogPostsStr = blogPostsStr.replace('export const blogPosts: BlogPost[] = ', '');
blogPostsStr = blogPostsStr.replace(/;\s*$/, '');

// A bit hacky but let's eval it
// Actually let's just use regex to parse it out since it's raw TS
