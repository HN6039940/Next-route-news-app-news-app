import React from "react";

import NewsList from "@/components/NewsList";
const page = async () => {
  const response = await fetch("http://localhost:8080/news");
  const news = await response.json();
  let newsContent;

  if (news) {
    newsContent = news;
  }

  return (
    <main className="  min-h-dvh  ">
      <h1 className=" text-5xl text-slate-50 mb-5">News Page</h1>
      <div className="">
        <NewsList news={newsContent} />
      </div>
    </main>
  );
};

export default page;
