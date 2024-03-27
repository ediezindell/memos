"use client";

import { useRef } from "react";
import { useMemoHandler } from "@/hooks/useMemoHandler";
import Link from "next/link";
import PrimaryButtton from "./components/PrimaryButton";
import SecondaryButtonLink from "./components/SecondaryButtonLink";

type Props = {
  id: string;
};

const MemoDetail = ({ id }: Props) => {
  const viewRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const { memo, appendContent } = useMemoHandler(id);

  const append = () => {
    if (!inputRef.current) {
      return;
    }
    const { value } = inputRef.current;
    appendContent(value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      append();
    }
  };
  const handleClick = () => append();

  if (!memo) {
    return (
      <div className="p-4 h-dvh grid content-center">
        <p className="text-center">loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-between h-dvh max-h-dvh">
      <div ref={viewRef} className="flex-shrink overflow-scroll">
        <p className="break-words whitespace-pre-wrap p-4">
          {memo?.content.length ? memo.content : "コンテンツはありません"}
        </p>
      </div>
      <div className="flex flex-col flex-shrink-0 max-h-dvh">
        <textarea
          ref={inputRef}
          className="border w-full p-2 focus:p-4 resize-none form-size-content max-h-12 focus:max-h-full"
          autoFocus={true}
          placeholder="追記する"
          onKeyDown={handleKeyDown}
        />
        <div className="flex">
          <SecondaryButtonLink href={`/${id}/edit`}>edit</SecondaryButtonLink>
          <PrimaryButtton onClick={handleClick}>save</PrimaryButtton>
        </div>
      </div>
    </div>
  );
};

export default MemoDetail;
