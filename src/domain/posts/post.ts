export type PostID = string;

export type PostAuthor = {
  id: PostID;
  name: string;
  email: string;
  admin: false;
  created_at: string;
  updated_at: string;
};

export type PostCategory = {
  id: PostID;
  name: string;
  created_at: string;
  updated_at: string;
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  id: PostID;
  url: string;
  width: number;
  height: number;
  createdAt: string;
  updatedAt: string;
};

export type PostCover = PostCoverFormat & {
  id: PostID;
  name: string;
  publicId: string;
  width: number;
  height: number;
  url: string;
  provider: string;
  createdAt: string;
  updatedAt: string;
  format: {
    id: string;
    createdAt: string;
    updatedAt: string;
    thumbnail: PostCoverFormat;
    small: PostCoverFormat;
    medium: PostCoverFormat;
    large: PostCoverFormat;
  };
};

export type PostData = {
  id: PostID;
  title: string;
  content: string;
  slug: string;
  author: PostAuthor;
  category: PostCategory;
  created_at: string;
  updated_at: string;
  cover: PostCover;
};

export type PostCount = {
  total: number;
  categories: { [key: string]: number };
  authors: { name: string; posts: number; categories: { name: string; posts: number }[] }[];
};
