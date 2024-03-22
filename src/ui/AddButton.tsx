import Link from "next/link";
import { uuidv7 } from "uuidv7";
import { FaPlusCircle } from "react-icons/fa";

const AddButton = () => {
  const newId = uuidv7();
  return (
    <Link
      href={`/${newId}`}
      className="fixed right-1 bottom-1 bg-red-400 p-2 rounded-full text-white text-3xl"
    >
      <FaPlusCircle />
    </Link>
  );
};
export default AddButton;
