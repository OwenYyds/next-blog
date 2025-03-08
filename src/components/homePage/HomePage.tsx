import React from "react";
import { ArticleCard } from "../ArticleCard";

export default function HomePage() {
  return (
    <>
      <div className="container my-5 text-center">
        <div className="block text-5xl font-bold">Hello , i am Owen</div>
        <div className="block text-3xl font-semibold">Welcome to my blog</div>
        <div className="block">My blog is under construction</div>
      </div>

      <div className="p-5 mx-auto max-w-screen-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>
    </>
  );
}
