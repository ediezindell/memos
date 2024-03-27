"use client";

import Link from "next/link";
import type { Memo } from "@/types/memo";

type Props = {
  memo: Memo;
};

const MemoItem = ({ memo }: Props) => {
  const firstLine = memo.content.length
    ? memo.content.split("\n").shift()
    : "無題";
  return (
    <li>
      <Link href={`/${memo.id}`} className="block w-full p-4 border-b-2">
        {firstLine}
      </Link>
    </li>
  );
};
export default MemoItem;
