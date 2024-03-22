"use client";

import Link from "next/link";
import type { Memo } from "@/types/memo";

type Props = {
  memo: Memo;
};

const MemoItem = ({ memo }: Props) => {
  return (
    <li>
      <Link href={`/${memo.id}`}>
        {memo.id}: {memo.content.split("\n").pop()}
      </Link>
    </li>
  );
};
export default MemoItem;
