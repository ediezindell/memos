"use client";

import { useRef } from "react";
import { useMemo } from "@/hooks/useMemo";

type Props = {
  id: string;
};

const MemoDetail = ({ id }: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { memo, appendContent } = useMemo(id);

  const append = () => {
    if (!inputRef.current) {
      return;
    }
    const { value } = inputRef.current;
    appendContent(value);
    inputRef.current.value = "";
  };

  if (!memo) {
    return "loading...";
  }

  return (
    <div className="flex flex-col justify-between h-dvh max-h-dvh">
      <div className="flex-shrink overflow-scroll p-4">
        <pre className="">
          {memo?.content.length ? memo.content : "コンテンツはありません"}
        </pre>
      </div>
      <div className="flex-shrink-0">
        <textarea
          className="border w-full p-2 my-2 resize-none"
          ref={inputRef}
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
