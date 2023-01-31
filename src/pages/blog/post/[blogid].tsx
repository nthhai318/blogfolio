import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const { blogid } = router.query;
  console.log(router);
  return <h1>This is Blog post: {blogid}</h1>;
};

export default BlogPost;
