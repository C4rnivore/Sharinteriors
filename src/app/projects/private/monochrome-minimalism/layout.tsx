import { ReactNode } from "react";

export const metadata = {
  title: "Monochrome minimalism",
};

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
