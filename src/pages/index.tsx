import Layout from '@/components/Layout/Layout';
import BlogPostList from '@/components/BlogPostList/BlogPostList';

const HomePage = () => {
  return (
    <div className="blog-container">
      <Layout>
        <BlogPostList />
      </Layout>
    </div>
  );
};

export default HomePage;
