import Link from "next/link";

const navPath = [
  { page: "Blog", link: "/blog" },
  { page: "Explore", link: "/explore" },
  { page: "About", link: "/about" },
];

export default function Nav() {
  return (
    <div className="align-center flex w-full flex-row bg-[hsl(266,90%,12%)] text-white">
      <div className="ml-[4rem]">
        <h1 className="text-[2rem]">Logo</h1>
      </div>
      <div className="flex w-full ">
        <ul className=" item- flex w-full flex-row justify-center gap-[2rem] align-middle">
          {navPath.map((route) => {
            return (
              <li key={route.page} className="self-center">
                <Link href={route.link}>{route.page}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div id="UserProfile" className="mr-[4rem] flex flex-row gap-[2rem]">
        {/* Add ThemeToggle here */}
        <div className="self-center">Theme</div>
        {/* Add UserAuth here */}
        <div className="self-center">User</div>
      </div>
    </div>
  );
}
