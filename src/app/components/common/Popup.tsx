import { paragraph2, semiBold } from "@/app/styles/font.css";
import { flexSprinklesFc } from "./utils/flex";
import { popupContents, popupWrapper } from "./popup.css";
import { MessageType } from "@/app/types/schemas";

const Popup = ({ text, children }: { text: MessageType; children: React.ReactNode }) => {
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
