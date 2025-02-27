import Layout from '@/components/Layout/Layout';
import BlogService from '@/services/BlogService';
import { BlogPostType } from '@/types/blog';
import { GetServerSideProps } from 'next';

interface PostPageProps {
  post: BlogPostType;
}

const PostPage: React.FC<PostPageProps> = ({ post }) => {
  if (!post) return <h1>Post not found</h1>;

  return (
    <Layout>
      <article>
        <img src={post.image} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </article>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params?.id;
  const post = await BlogService.fetchPost(Number(id));

  return {
    props: {
      post,
    },
  };
};

export default PostPage;
