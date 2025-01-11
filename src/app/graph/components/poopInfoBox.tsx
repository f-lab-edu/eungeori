import { gray300 } from '@/app/styles/colors.css';
import { caption, light } from '@/app/styles/font.css';
import { poopInfoText, poopBoxWrapper, poopBox } from '../styles/graph.css';
import { consistencyCount, consistency, TransformedBowelData } from '../utils/function';
import Image from 'next/image';

type PoopInfoBoxProps = {
  bowelDate: TransformedBowelData[];
};

const PoopInfoBox = ({ bowelDate }: PoopInfoBoxProps) => {
  return (
    <>
      <div className={poopInfoText}>
        <p className={`${caption} ${gray300} ${light}`}>
          * 같은 날 변의 묽기가 다를 경우 먼저 적힌 상태로 보여지게됩니다.
        </p>
      </div>
      <div className={poopBoxWrapper}>
        <div className={poopBox}>
          <Image src="/svgs/poop/thin/active-thin.svg" width={27} height={27} alt="icon" />
          {consistencyCount(consistency, 'thin', bowelDate).length}
        </div>
        <div className={poopBox}>
          <Image src="/svgs/poop/thin/active-default.svg" width={27} height={27} alt="icon" />
          {consistencyCount(consistency, 'default', bowelDate).length}
        </div>
        <div className={poopBox}>
          <Image src="/svgs/poop/thin/active-hard.svg" width={27} height={27} alt="icon" />
          {consistencyCount(consistency, 'hard', bowelDate).length}
        </div>
      </div>
    </>
  );
};

export default PoopInfoBox;
