import React from "react";

import { getLatestNews } from "@/lib/news.utils";
import NewsList from "@/components/NewsList";

const LatestNewsDefaultPage = () => {
  return (
    <main className=" min-h-dvh ">
      <h1 className=" text-5xl text-slate-50 mb-5">Latest News</h1>
      <div className="">
        <NewsList news={getLatestNews()} />
      </div>
    </main>
  );
};

export default LatestNewsDefaultPage;
