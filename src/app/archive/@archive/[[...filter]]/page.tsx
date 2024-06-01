import React from "react";
import Link from "next/link";
import {
  getAvailableNewsYears,
  getNewsForYearAndMonth,
  getAvailableNewsMonths,
  getNewsForYear,
} from "@/lib/news.utils";

import NewsList from "@/components/NewsList";

type ArchiveNewsPageProps = {
  params: {
    filter: string[];
  };
  searchParams: {};
};

const YearNewsPage = ({ params }: ArchiveNewsPageProps) => {
  let news;
  let links = getAvailableNewsYears();
  const filter = params?.filter;
  const year = filter?.[0];
  const month = filter?.[1];

  if (year && !month) {
    news = getNewsForYear(year);
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    news = getNewsForYearAndMonth(year, month);
    links = [];
  }

  if (
    (year && !getAvailableNewsYears().includes(+year)) ||
    (month && !getAvailableNewsMonths(year).includes(+month))
  ) {
    throw new Error("Not found");
  }
  return (
    <>
      <header className=" text-slate-50 py-10  size-full">
        <div className="grid grid-cols-2 ">
          <div className="space-y-6">
            <h1 className=" text-5xl">Archive</h1>
            <ul className=" flex items-center gap-5 ">
              {!links ? (
                <h1> not content </h1>
              ) : (
                links.map((link) => {
                  let href = year
                    ? `/archive/${year}/${link}`
                    : `/archive/${link}`;

                  return (
                    <li key={link} className=" text-2xl font-bold">
                      <Link href={href}>{link}</Link>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      </header>
      <main className="border-b-4 border-slate-300">
        <h1 className=" text-5xl text-slate-50 mb-5">
          {year ? `${year} news` : ""}
        </h1>
        <div className="">
          {news ? (
            <NewsList news={news} />
          ) : (
            <h1 className=" text-3xl text-slate-50">No news found</h1>
          )}
        </div>
      </main>
    </>
  );
};

export default YearNewsPage;
