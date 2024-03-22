"use client";

import { useEffect, useState } from "react";
import MemoItem from "./MemoItem";

import type { Memo } from "@/types/memo";
import { loadMemo, loadMemoIds } from "../lib/util";

const MemoList = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    const fetchMemos = () => {
      const ids = loadMemoIds();
      const loadedMemos: Memo[] = ids.map((id) => loadMemo(id));
      setMemos(loadedMemos);
    };
    fetchMemos();
  }, []);
  return (
    <ul className="max-w-md text-gray-900 divide-y divide-gray-200">
      {memos.map((memo) => (
        <MemoItem key={memo.id} memo={memo} />
      ))}
    </ul>
  );
};
export default MemoList;
