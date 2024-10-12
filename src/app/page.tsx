"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { supabase } from "./utils/supabase";

export default function Home() {
  const [title, setTitle] = useState<string>("");
  const onSubmit = async () => {
    console.log("함수 호출");

    if (!title) {
      console.error("업당");
      return;
    } else {
      const { data, error, status } = await supabase
        .from("todos")
        .insert([{ title: title }])
        .select();

      if (error) {
        console.log(error);
      }
      if (status === 201) {
        console.log(data);
      }
    }
  };
  return (
    <main className={styles.main}>
      <input onChange={(e) => setTitle(e.target.value)} />
      <button onClick={onSubmit}>제출하기</button>
    </main>
  );
}
