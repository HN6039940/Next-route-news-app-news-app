import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

type NewsSlagProps = {
  params: {
    NewsSlag: string;
  };
  searchParams: {};
};

type NewsItem = {
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
};

const NewsSlagPage = async ({ params }: NewsSlagProps) => {
  const response = await fetch(`http://localhost:8080/news/`);
  const data: NewsItem[] = await response.json();

  const news = data.find((news: NewsItem) => news.id === +params.NewsSlag);
  console.log(data);

  if (!news) {
    return notFound();
  }

  return (
    <article className=" min-h-dvh space-y-4 ">
      <Link href={`./${params.NewsSlag}/image`}>
        <div>
          <img src="" alt="" className=" size-20" />
        </div>
      </Link>
      <div className=" space-y-5">
        <h1 className=" text-4xl text-slate-50">{news?.title}</h1>
        <p className=" text-slate-50 text-xl tracking-wide">{news?.content}</p>
        <Link href="/">Home</Link>
      </div>
    </article>
  );
};

export default NewsSlagPage;
