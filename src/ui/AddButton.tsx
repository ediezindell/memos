import Link from "next/link";
import { uuidv7 } from "uuidv7";

const AddButton = () => {
  const newId = uuidv7();
  return <Link href={`/${newId}`}>+</Link>;
};
export default AddButton;
