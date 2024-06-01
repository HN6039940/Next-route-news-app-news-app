import Link from "next/link";

export default function Home() {
  return (
    <main className=" container mx-auto min-h-dvh bg-slate-500">
      <div className=" flex flex-col">
        <Link href={"/"}>Home</Link>
        <Link href={"/news"}>News</Link>
      </div>
    </main>
  );
}
