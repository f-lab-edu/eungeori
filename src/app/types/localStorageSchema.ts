import { z } from "zod";
import { signinSchema } from "./signinSchema";
import { signupSchema } from "./signupSchema";

export type LocalStorageSchema = {
  signup: z.infer<typeof signupSchema>;
  signin: z.infer<typeof signinSchema>;
  goal: string;
  recordNote: string;
};

type LocalStorageMapper<T> = {
  fromJson: (json: string | null) => T;
  toJson: (data: T) => string;
};

export class LocalStorage<T extends keyof LocalStorageSchema> {
  private key: T;
  private mapper: LocalStorageMapper<LocalStorageSchema[T]>;

  constructor(key: T, mapper?: LocalStorageMapper<LocalStorageSchema[T]>) {
    this.key = key;
    this.mapper = mapper || LocalStorage.defaultMapper();
  }

  static defaultMapper<T>(): LocalStorageMapper<T> {
    return {
      fromJson: (json) => (json ? JSON.parse(json) : null),
      toJson: (data) => JSON.stringify(data),
    };
  }

  get(): LocalStorageSchema[T] | null {
    const item = localStorage.getItem(this.key);
    return item ? this.mapper.fromJson(item) : null;
  }

  set(target: LocalStorageSchema[T]): void {
    const value = target === "" ? JSON.stringify("") : this.mapper.toJson(target);
    localStorage.setItem(this.key, value);
  }

  remove(): void {
    localStorage.removeItem(this.key);
  }
}
