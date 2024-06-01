export default function RootLayout({
  archive,
  latest,
}: Readonly<{
  archive: React.ReactNode;
  latest: React.ReactNode;
}>) {
  return (
    <div className=" px-5 py-3 mx-auto space-y-10">
      <div className="grid grid-cols-1 place-items-start">
        {archive}
        {latest}
      </div>
    </div>
  );
}
