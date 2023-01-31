import BlogInput from "../../components/BlogInput";

const CreateBlog = () => {
  return (
    <div className="mx-auto w-[50rem] border-[1px] border-solid border-stone-300">
      <h1 className="mx-auto text-center text-[2rem] uppercase ">
        share your Blog post here
      </h1>
      <form method="POST" action="/blog/create">
        <div className="container my-[1rem] block">
          <label className="block" htmlFor="blog-title">
            Blog Post Title
          </label>
          <textarea
            className="w-full overflow-y-scroll p-2 text-2xl text-black"
            name="blog-title"
            id="blog-title"
            placeholder="Your blog title here"
            maxLength={120}
            required
            wrap="soft"
          />
        </div>
        <div className="container my-[1rem] block">
          <label className="block" htmlFor="blog-content">
            Blog content
          </label>
          <textarea
            className="w-full overflow-y-scroll p-2 text-base text-black"
            name="blog-content"
            id="blog-content"
            placeholder="Your blog content here"
            required
            rows={10}
          />
          <BlogInput row={10} />
        </div>
        <button className="mx-auto block rounded-md bg-pink-700 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20">
          Submit your blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
