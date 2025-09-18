"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  basicClassName?: string | undefined;
  children: ReactNode;
}

export default function NavLink(Props: NavLinkProps) {
  const { href, onClick, basicClassName = undefined, children } = Props;
  const pathname = usePathname();
  const isActive = pathname === href;

  let class_name = "";
  if (basicClassName) {
    class_name = basicClassName;
    if (isActive) {
      class_name += ` active`;
    }
  }

  return (
    <Link onClick={onClick} href={href} className={class_name}>
      {children}
    </Link>
  );
}
