import { type NextPage } from "next";
import Head from "next/head";
import AuthShowcase from "../components/AuthShowcase";

import { api } from "../utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>NThHai Blog</title>
        <meta name="description" content="Anything Anywhere Anytime" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-[50vh] flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>
          <AuthShowcase />
        </div>
      </main>
    </>
  );
};

export default Home;
