import Navigation from '../components/common/Navigation';
import { graphContainer, graphWrapper } from './styles/graph.css';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={graphWrapper}>
      <article className={graphContainer}>{children}</article>
      <Navigation />
    </section>
  );
};

export default layout;
