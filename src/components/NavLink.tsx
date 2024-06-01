"use client";

import React, { PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
} & PropsWithChildren;

const NavLink = (props: NavLinkProps) => {
  const { href, children } = props;
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${
        path.startsWith(href) ? " text-slate-50" : " text-slate-700"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
