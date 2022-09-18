import Layout from "../components/Layout"
import Post from "../components/Post";
import { getAllPostData } from "../lib/post";

export default function Blog({ posts }) {
  return (
    <Layout title="Blog">
      <ul className="my-4">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getAllPostData();
  return {
    props: { posts },
  };
}