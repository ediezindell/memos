"use client";

import { useEffect, useState } from "react";
import MemoItem from "./MemoItem";

import type { Memo } from "@/types/memo";

const MemoList = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    const fetchMemos = () => {
      // TODO: fetchする
      const loadedMemos: Memo[] = [
        {
          id: "1",
          content: "hoge\nhoge"
        }
      ];
      setMemos(loadedMemos);
    };
    fetchMemos();
  }, []);
  return (
    <ul>
      {memos.map((memo) => (
        <MemoItem key={memo.id} memo={memo} />
      ))}
    </ul>
  );
};
export default MemoList;
