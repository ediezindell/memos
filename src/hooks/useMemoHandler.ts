import { loadMemo, saveMemo } from "@/lib/util";
import { Memo } from "@/types/memo";
import { useEffect, useState } from "react";

export const useMemoHandler = (id: string) => {
  const [memo, setMemo] = useState<Memo | null>();

  const updateMemo = (newMemo: Memo) => {
    if (memo?.content !== newMemo.content) {
      setMemo(newMemo);
      saveMemo(newMemo);
      alert("updated!");
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    const loadedMemo = loadMemo(id);
    setMemo(loadedMemo);
  }, [id]);

  const appendContent = (value: string) => {
    if (!memo) {
      return;
    }
    const { content } = memo;
    const newContent = `${content.length ? `${content}\n` : ""}${value}`.trim();
    updateMemo({
      id,
      content: newContent
    });
  };

  const updateContent = (value: string) => {
    if (!memo) {
      return;
    }
    const newContent = value.trim();
    updateMemo({
      id,
      content: newContent
    });
  };

  return {
    memo,
    appendContent,
    updateContent
  };
};
