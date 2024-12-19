'use client';

import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { heading2, semiBold } from '@/app/styles/font.css';
import { paddingSprinkles } from '@/app/styles/padding.css';
import ShapeButton from './components/shapeButton';
import ConsistencyBox from './components/consistencyBox';
import ShapeTypeBox from './components/shapeTypeBox';

const Page = () => {
  return (
    <article>
      <div className={`${flexSprinklesFc({ flexDirection: 'column', gap: '16px' })} `}>
        <h3 className={`${semiBold} ${heading2} ${paddingSprinkles({ paddingBottom: 's60' })}`}>
          묽기 및 모양을
          <br />
          선택해주세요
        </h3>
      </div>
      <div className={`${flexSprinklesFc({ flexDirection: 'column' })}`}>
        <ConsistencyBox />

        <ShapeTypeBox />
      </div>

      <ShapeButton />
    </article>
  );
};

export default Page;
