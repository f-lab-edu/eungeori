"use client";

import { useRouter } from "next/navigation";
import { infoWrapper } from "../styles/info/common.css";
import Image from "next/image";
import { pointer } from "../styles/global.css";
import { paddingSprinkles } from "../styles/padding.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <section className={infoWrapper}>
      <article className={`${paddingSprinkles({ paddingBottom: "s32" })} ${pointer}`}>
        <Image
          src="/svgs/prev.svg"
          alt="back"
          width={17}
          height={21}
          onClick={() => {
            router.push("/record");
          }}
        />
      </article>

      {children}
    </section>
  );
}
