import React from "react";
import Link from "next/link";

type NewsDataProps = {
  id: string;
  title: string;
  slug: string;
  image: string;
  date: string;
  content: string;
};

type NewsListProps = {
  news: NewsDataProps[];
};

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className=" grid grid-cols-3 place-items-center text-3xl text-slate-50">
      {news.map((item) => {
        return (
          <li key={item.id} className=" hover:bg-slate-500 p-3 size-full ">
            <div className=" ">
              <Link href={`/news/${item.id}`}>{item.title}</Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsList;
