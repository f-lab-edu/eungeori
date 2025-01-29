'use client';

import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { heading2, semiBold } from '@/app/_styles/font.css';
import { paddingSprinkles } from '@/app/_styles/padding.css';

import { StepChangeHandler } from '../../page';
import ConsistencyBox from './_components/consistencyBox';
import ShapeButton from './_components/shapeButton';
import ShapeTypeBox from './_components/shapeTypeBox';

const ShapePage = ({ onButtonClick }: { onButtonClick: StepChangeHandler }) => {
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

      <ShapeButton onButtonClick={onButtonClick} />
    </article>
  );
};

export default ShapePage;
