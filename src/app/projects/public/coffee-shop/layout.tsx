import { ReactNode } from "react";

export const metadata = {
  title: "Vintage Coffee Shop",
};

export default function PageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
