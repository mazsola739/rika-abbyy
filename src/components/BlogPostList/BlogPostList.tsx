import { useEffect, useState, useMemo } from 'react';
import BlogPost from '@/components/BlogPost/BlogPost';
import Pagination from '@/components/Pagination/Pagination';
import { BlogPostType } from '@/types/blog';
import BlogService from '@/services/BlogService';
import styles from './BlogPostList.module.scss';

const BlogPostList = () => {
  const [allPosts, setAllPosts] = useState<BlogPostType[]>([]);
  const [paginatedPosts, setPaginatedPosts] = useState<BlogPostType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    BlogService.fetchPosts().then((posts) => {
      setAllPosts(posts);
      setPaginatedPosts(posts.slice(0, postsPerPage));
    });
  }, []);

  const recentPosts = useMemo(() => {
    if (allPosts.length < 4) return allPosts;
    return [...allPosts].sort(() => 0.5 - Math.random()).slice(0, 4);
  }, [allPosts]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * postsPerPage;
    setPaginatedPosts(allPosts.slice(startIndex, startIndex + postsPerPage));
  };

  return (
    <div className={styles['blog-post-list']}>
      <section className={styles.section}>
        <h2 className={styles['section-title']}>Recent Blog Posts</h2>
        <div className={styles['recent-posts']}>
          {recentPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles['section-title']}>All Blog Posts</h2>
        <div className={styles['all-posts']}>
          {paginatedPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
        <Pagination totalItems={allPosts.length} itemsPerPage={postsPerPage} currentPage={currentPage} onPageChange={handlePageChange} />
      </section>
    </div>
  );
};

export default BlogPostList;
