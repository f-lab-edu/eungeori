import Navigation from '../_components/common/Navigation';
import { recordContainer, recordWrapper } from './_styles/record.css';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={recordWrapper}>
      <article className={recordContainer}>{children}</article>
      <Navigation />
    </section>
  );
};

export default layout;
