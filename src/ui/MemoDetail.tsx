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
    <div className="flex flex-col justify-between h-dvh max-h-dvh">
      <div className="flex-shrink overflow-scroll p-4">
        <pre className="">
          {memo?.content.length ? memo.content : "コンテンツはありません"}
        </pre>
      </div>
      <div className="flex-shrink-0">
        <textarea
          ref={ref}
          className="border w-full p-2 my-2 resize-none"
          autoFocus={true}
        />
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full"
          onClick={append}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default MemoDetail;
