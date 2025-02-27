import { API_URL, PIC_BASE_URL } from '@/constants/api';
import { BlogPostType } from '@/types/blog';
import { getRandomTags } from '@/utils/helpers';

class BlogService {
  static async fetchPosts(): Promise<BlogPostType[]> {
    try {
      const res = await fetch(`${API_URL}`);
      if (!res.ok) throw new Error('Failed to fetch all posts');
      const data = await res.json();
      return data.map(BlogService.mapPost);
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  }

  static async fetchPost(id: number): Promise<BlogPostType | null> {
    try {
      const res = await fetch(`${API_URL}/${id}`);
      if (!res.ok) throw new Error(`Failed to fetch post with id ${id}`);
      const post = await res.json();
      return BlogService.mapPost(post);
    } catch (error) {
      console.error('Error fetching post:', error);
      return null;
    }
  }

  private static mapPost(post: any): BlogPostType {
    return {
      id: post.id,
      title: post.title,
      description: post.body,
      image: `${PIC_BASE_URL}/seed/${post.id}/800/400`,
      date: new Date().toLocaleDateString(),
      views: Math.floor(Math.random() * 1000),
      readingTime: BlogService.calculateReadingTime(post.body),
      tags: getRandomTags(),
    };
  }

  private static calculateReadingTime(text: string): string {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  }
}

export default BlogService;
