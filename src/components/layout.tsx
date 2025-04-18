import type { PropsWithChildren } from "react";
import Header from "./Header";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      {/* <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 text-gray-400">i am footer</div>
      </footer> */}
    </div>
  );
};

export default layout;
