import Link from 'next/link';
import Tag from '../Tag/Tag';
import { allTags } from '@/constants/tags';
import { capitalize } from '@/utils/helpers';
import { BlogPostProps } from './BlogPost.props';
import { formatDate } from '@/utils/helpers';
import styles from './BlogPost.module.scss';
import { ArrowUpRight } from '../Icons/Icons';

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const postTags = allTags.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 2);

  return (
    <div className={styles['blog-post']}>
      <img src={post.image} alt={post.title} className={styles['blog-post-image']} />

      <div className={styles['blog-post-content']}>
        <div className={styles['blog-post-date']}>
          {formatDate(post.date)} • {post.views} views • {post.readingTime}
        </div>

        <div className={styles['blog-post-title']}>
          <h3>{capitalize(post.title)}</h3>
          <ArrowUpRight />
        </div>

        <p className={styles['blog-post-description']}>{post.description.length > 80 ? `${post.description.substring(0, 80)}...` : post.description}</p>

        <div className={styles['blog-post-footer']}>
          <div className={styles['tags']}>
            {postTags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>

          <div className={styles['blog-post-meta']}>
            <Link href={`/post/${post.id}`}>
              <button className={styles['read-more']}>Read more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
