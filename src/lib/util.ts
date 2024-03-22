import { Memo } from "@/types/memo";

export const generateStorageKey = (id: string) => `memo----${id}`;
export const loadMemoIds = (): string[] => {
  const json = localStorage.getItem("memoIds");
  if (!json) {
    return [];
  }
  return JSON.parse(json);
};
export const addMemoId = (id: string) => {
  const ids = loadMemoIds();
  ids.push(id);
  const setIds = new Set(ids);
  localStorage.setItem("memoIds", JSON.stringify([...setIds]));
};
export const saveMemo = (memo: Memo) =>
  localStorage.setItem(generateStorageKey(memo.id), memo.content);
export const loadMemo = (id: string): Memo => {
  const loadedContent = localStorage.getItem(generateStorageKey(id));
  if (!loadedContent) {
    addMemoId(id);
  }
  return {
    id,
    content: loadedContent ?? ""
  };
};
