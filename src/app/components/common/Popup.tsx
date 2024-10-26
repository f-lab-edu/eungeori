import { paragraph2, semiBold } from "@/app/styles/font.css";
import { flexSprinklesFc } from "./utils/flex";
import { z } from "zod";
import { popupContents, popupWrapper } from "./popup.css";

const textSchema = z.string().nullable();

const Popup = ({ text, children }: { text: z.infer<typeof textSchema>; children: React.ReactNode }) => {
  return (
    <section className={popupWrapper}>
      <article className={`${popupContents} ${flexSprinklesFc({ flexDirection: "column", gap: "24px" })}`}>
        <p className={`${paragraph2} ${semiBold}`}>{text}</p>
        {children}
      </article>
    </section>
  );
};

export default Popup;
