"use client";

import { Memo } from "@/types/memo";
import { useEffect, useRef, useState } from "react";

type Props = {
  id: string;
};

const MemoDetail = ({ id }: Props) => {
  const [memo, setMemo] = useState<Memo | null>();

  const ref = useRef<HTMLTextAreaElement>(null);

  const generateStorageKey = (id: string) => `memo----${id}`;

  useEffect(() => {
    const fetchMemo = async () => {
      const loadedMemoJson = localStorage.getItem(generateStorageKey(id));
      console.log(loadedMemoJson);
      if (!loadedMemoJson) {
        return;
      }
      const loadedMemo = JSON.parse(loadedMemoJson);

      const isMemo = (_memo: unknown): _memo is Memo =>
        typeof _memo === "object" &&
        _memo !== null &&
        "id" in _memo &&
        "content" in _memo;

      if (!isMemo(loadedMemo)) {
        console.log("not memo type");
        return;
      }
      setMemo(loadedMemo);
    };
    fetchMemo();
  }, [id]);

  useEffect(() => {
    if (!memo) {
      return;
    }
    const json = JSON.stringify(memo);
    localStorage.setItem(generateStorageKey(memo.id), json);
    console.log("saved");
  }, [memo]);

  const append = () => {
    if (!ref.current || !memo) {
      return;
    }
    const { value } = ref.current;
    const { content } = memo;
    const newContent = `${content.length ? `${content}\n` : ""}${value}`;
    setMemo({
      id,
      content: newContent
    });
    ref.current.value = "";
  };

  return (
    <>
      <pre>
        {memo?.content.length ? memo.content : "コンテンツはありません"}
      </pre>
      <textarea ref={ref} />
      <button type="button" onClick={append}>
        save
      </button>
    </>
  );
};

export default MemoDetail;
