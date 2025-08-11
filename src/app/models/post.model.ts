// src/app/models/post.model.ts
export interface Post {
  id: number | string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // Puede ser string | Date si lo prefieres
}