import { z } from "zod";
import { signinSchema } from "./signinSchema";
import { signupSchema } from "./signupSchema";

export type LocalStorageSchema = {
  signup: z.infer<typeof signupSchema>;
  signin: z.infer<typeof signinSchema>;
  goal: string;
};

export const localStorageSetItem = <K extends keyof LocalStorageSchema>(
  key: K,
  value: LocalStorageSchema[K]
): void => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const localStorageGetItem = <K extends keyof LocalStorageSchema>(
  key: K
): LocalStorageSchema[K] | null => {
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as LocalStorageSchema[K]) : null;
};

export const localStorageRemoveItem = <K extends keyof LocalStorageSchema>(key: K): void => {
  localStorage.removeItem(key);
};
