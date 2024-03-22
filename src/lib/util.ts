import { Memo } from "@/types/memo";

export const generateStorageKey = (id: string) => `memo----${id}`;
export const saveMemo = (memo: Memo) =>
  localStorage.setItem(generateStorageKey(memo.id), memo.content);
export const loadMemo = (id: string): Memo => {
  const content = localStorage.getItem(generateStorageKey(id)) ?? "";
  return {
    id,
    content
  };
};
