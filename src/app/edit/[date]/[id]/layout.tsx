import { recordContainer } from '@/app/record/_styles/record.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <section className={recordContainer}>{children}</section>;
};

export default Layout;
