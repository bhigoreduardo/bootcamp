export type Category = {
  id: number;
  name: string;
  description: string;
};

export type Video = {
  id: number;
  title: string;
  description: string;
  file_path: string;
  thumbnail_url: string;
  category_id: number;
};
