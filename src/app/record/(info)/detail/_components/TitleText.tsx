import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { semiBold, heading2 } from '@/app/_styles/font.css';

const TitleText = () => {
  return (
    <div className={`${flexSprinklesFc({ flexDirection: 'column', gap: '16px' })} `}>
      <h3 className={`${semiBold} ${heading2}`}>
        기록 할
        <br />
        내용이 있나요?
      </h3>
    </div>
  );
};

export default TitleText;
