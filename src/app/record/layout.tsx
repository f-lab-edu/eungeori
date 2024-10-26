import Navigation from "../components/common/Navigation";
import { recordWrapper, recordContainer } from "./record.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={recordWrapper}>
      <article className={recordContainer}>{children}</article>
      <Navigation />
    </section>
  );
};

export default layout;
