import MemoEdit from "@/ui/MemoEdit";

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params }: Props) => <MemoEdit id={params.id} />;
export default Page;
