import { recordContainer } from '@/app/record/_styles/record.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section className={recordContainer}>{children}</section>;
}
