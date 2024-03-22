"use client";

import { useRef } from "react";
import { useMemoHandler } from "@/hooks/useMemoHandler";

type Props = {
  id: string;
};

const MemoDetail = ({ id }: Props) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { memo, appendContent } = useMemoHandler(id);

  const append = () => {
    if (!inputRef.current) {
      return;
    }
    const { value } = inputRef.current;
    appendContent(value);
    inputRef.current.value = "";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      append();
    }
  };
  const handleClick = () => append();

  if (!memo) {
    return "loading...";
  }

  return (
    <div className="flex flex-col justify-between h-dvh max-h-dvh">
      <div className="flex-shrink overflow-scroll p-4">
        <p className="break-words whitespace-pre-wrap">
          {memo?.content.length ? memo.content : "コンテンツはありません"}
        </p>
      </div>
      <div className="flex flex-col flex-shrink-0">
        <textarea
          ref={inputRef}
          className="border w-full p-2 resize-none h-12 focus:h-52"
          autoFocus={true}
          placeholder="何か入力してください"
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="bg-red-500 text-white py-2 px-4 w-full"
          onClick={handleClick}
        >
          save
        </button>
      </div>
    </div>
  );
};

export default MemoDetail;
