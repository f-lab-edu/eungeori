import Navigation from "../components/common/Navigation";
import { recordContainer, recordWrapper } from "./styles/record.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={recordWrapper}>
      <article className={recordContainer}>{children}</article>
      <Navigation />
    </section>
  );
};

export default layout;
