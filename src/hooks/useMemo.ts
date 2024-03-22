import { loadMemo, saveMemo } from "@/lib/util";
import { Memo } from "@/types/memo";
import { useEffect, useState } from "react";

export const useMemo = (id: string) => {
  const [memo, setMemo] = useState<Memo | null>();
  useEffect(() => {
    if (!id) {
      return;
    }
    const loadedMemo = loadMemo(id);
    setMemo(loadedMemo);
  }, [id]);

  useEffect(() => {
    if (!memo) {
      return;
    }
    saveMemo(memo);
  }, [memo]);

  const appendContent = (value: string) => {
    if (!memo) {
      return;
    }
    const { content } = memo;
    const newContent = `${content.length ? `${content}\n` : ""}${value}`.trim();
    setMemo({
      id,
      content: newContent
    });
  };

  return {
    memo,
    appendContent
  };
};
