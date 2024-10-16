import Navigation from "../components/common/Navigation";
import { myContainer, myWrapper } from "../styles/my/my.css";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={myWrapper}>
      <article className={myContainer}>{children}</article>
      <Navigation />
    </section>
  );
};

export default layout;
