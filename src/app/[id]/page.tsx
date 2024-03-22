import MemoDetail from "@/ui/MemoDetail";

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params }: Props) => <MemoDetail id={params.id} />;
export default Page;
