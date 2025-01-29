import Navigation from '../_components/common/navigation';
import { graphContainer, graphWrapper } from './_styles/graph.css';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={graphWrapper}>
      <article className={graphContainer}>{children}</article>
      <Navigation />
    </section>
  );
};

export default layout;
