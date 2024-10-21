import { paragraph2, semiBold } from "@/app/styles/font.css";
import { flexSprinklesFc } from "./utils/flex";
import { popupWrapper, popupContents } from "./popup.css";

const Popup = ({ text, children }: { text: string; children: React.ReactNode }) => {
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
