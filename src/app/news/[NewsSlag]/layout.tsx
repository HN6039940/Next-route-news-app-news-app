import React from "react";

const layout = ({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default layout;
