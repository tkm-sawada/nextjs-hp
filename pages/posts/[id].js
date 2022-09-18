import Link from "next/link";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/post";

const Post = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>
  }
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog-page">
        <a className="flex cursor-pointer mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
            <path fillRule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd" />
          </svg>
          <span>Back to blog-page</span>
        </a>
      </Link>
    </Layout>
  );
}
export default Post;

export async function getStaticPaths() {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: { post },
  };
}