import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
};

const SecondaryButtonLink = ({ children, href }: Props) => {
  return (
    <Link
      href={href}
      className="block text-center bg-secondary hover:opacity-80 text-white py-2 px-4 w-full"
    >
      {children}
    </Link>
  );
};
export default SecondaryButtonLink;
