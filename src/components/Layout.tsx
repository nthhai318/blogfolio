import { type ReactNode } from "react";
import Nav from "./Nav";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-[hsl(266,90%,12%)]">
      <Nav />
      {children}
    </div>
  );
};

export default RootLayout;
