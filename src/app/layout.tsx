import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "memo",
  description: "memo"
};

type Props = Readonly<{ children: React.ReactNode }>;

const Layout = ({ children }: Props) => (
  <html lang="ja">
    <body className="bg-gray-50">
      <main className="container bg-white mx-auto max-w-sm h-dvh leading-relaxed">
        {children}
      </main>
    </body>
  </html>
);
export default Layout;
