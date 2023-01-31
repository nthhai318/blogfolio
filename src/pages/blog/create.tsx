import BlogInput from "../../components/BlogInput";
import { useForm } from "react-hook-form";

export const OldBlog = () => {
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
            rows={4}
          />
          <BlogInput row={5} style={"block w-full"} />
          <BlogInput row={6} style={"block w-full"} />
        </div>
        <button className="mx-auto block rounded-md bg-pink-700 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20">
          Submit your blog
        </button>
      </form>
    </div>
  );
};

type POSTREQUEST = {
  "Blog title": string;
  "Blog content": string;
  Author: string;
};

const CreateBlog = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: POSTREQUEST) => {
    alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <div className="mx-auto w-[50vw]">
      <h1 className="text-center text-3xl font-bold uppercase">
        Share your Blog here
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          className="my-4 block w-full font-bold text-black"
          placeholder="Blog title"
          {...register("Blog title", { required: true, maxLength: 120 })}
          rows={2}
        />
        <textarea
          className="my-4 block w-full text-black"
          placeholder="Blog content"
          {...register("Blog content", { required: true })}
          rows={10}
        />
        <textarea
          className="my-4 block w-full text-black"
          placeholder="Author"
          {...register("Author", {})}
          rows={1}
        />

        <input
          type="submit"
          className="mx-auto my-3 block w-full rounded-md bg-pink-700 px-6 py-3 text-white"
        />
      </form>
    </div>
  );
};

export default CreateBlog;
