"use client";

import { useRef } from "react";
import { useMemoHandler } from "@/hooks/useMemoHandler";

type Props = {
  id: string;
};

const MemoEdit = ({ id }: Props) => {
  const { memo, updateContent } = useMemoHandler(id);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const update = () => {
    if (!inputRef.current) {
      return;
    }

    const { value } = inputRef.current;
    updateContent(value);
    location.href = `/${id}`;
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      update();
    }
  };
  const handleClick = () => {
    update();
  };

  return (
    <div className="flex flex-col h-dvh">
      <textarea
        className="border w-full p-4 resize-none flex-shrink h-full"
        ref={inputRef}
        onKeyDown={handleKeyDown}
        autoFocus
        defaultValue={memo?.content}
      />
      <button
        type="button"
        className="bg-red-500 text-white py-2 px-4 w-full flex-shrink-0"
        onClick={handleClick}
      >
        save
      </button>
    </div>
  );
};
export default MemoEdit;
