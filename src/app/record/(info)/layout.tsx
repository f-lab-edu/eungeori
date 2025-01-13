'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { pointer } from '@/app/_styles/global.css';
import { paddingSprinkles } from '@/app/_styles/padding.css';
import { infoWrapper } from './_common/common.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <section className={infoWrapper}>
      <article className={`${paddingSprinkles({ paddingBottom: 's32' })} ${pointer}`}>
        <Image
          src="/svgs/prev.svg"
          alt="back"
          width={17}
          height={21}
          onClick={() => {
            router.push('/record');
          }}
        />
      </article>

      {children}
    </section>
  );
};

export default Layout;
