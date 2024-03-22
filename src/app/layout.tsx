import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "memo",
  description: "memo"
};

type Props = Readonly<{ children: React.ReactNode }>;

const Layout = ({ children }: Props) => (
  <html lang="ja">
    <body>{children}</body>
  </html>
);
export default Layout;
