'use client';

import { caption3 } from '@/app/_styles/font.css';
import { navContainer, navWrapper } from '@/app/_styles/navigation/navigation.css';
import Image from 'next/image';
import { gray500, primary } from '@/app/_styles/colors.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { pointer } from '@/app/_styles/global.css';
import { flexSprinklesFc } from './utils/flex';

const Navigation = () => {
  const router = useRouter();

  const [path, setPath] = useState<string>('record');

  const handleClick = (pathName: string) => {
    if (pathName) router.push(`/${pathName}`);
    setPath(pathName);
  };

  return (
    <nav className={navWrapper}>
      <div className={navContainer}>
        <div
          className={`${flexSprinklesFc({
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
          })} ${pointer}`}
          onClick={() => {
            handleClick('graph');
          }}
        >
          <Image
            src={path === 'graph' ? '/svgs/active_graph.svg' : '/svgs/graph.svg'}
            alt="icon"
            width={25}
            height={20}
            priority
          />
          <p className={`${caption3} ${path === 'graph' ? primary : gray500}`}>분석</p>
        </div>
        <div
          className={`${flexSprinklesFc({
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
          })} ${pointer}`}
          onClick={() => {
            handleClick('record');
          }}
        >
          <Image
            src={path === 'record' ? '/svgs/active_calender.svg' : '/svgs/calender.svg'}
            alt="icon"
            width={20}
            height={20}
            priority
          />
          <p className={`${caption3} ${path === 'record' ? primary : gray500}`}>캘린더</p>
        </div>
        <div
          className={`${flexSprinklesFc({
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
          })} ${pointer}`}
          onClick={() => {
            handleClick('my');
          }}
        >
          <Image
            src={path === 'my' ? '/svgs/active_my.svg' : '/svgs/my.svg'}
            alt="icon"
            width={20}
            height={20}
            priority
          />
          <p className={`${caption3} ${path === 'my' ? primary : gray500}`}>마이</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
