import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import { gray300 } from '@/app/_styles/colors.css';
import { semiBold, heading2, caption } from '@/app/_styles/font.css';

const TimeTitle = () => {
  return (
    <div className={`${flexSprinklesFc({ flexDirection: 'column', gap: '16px' })} `}>
      <h3 className={`${semiBold} ${heading2}`}>
        몇 시에
        <br />
        다녀오셨나요?
      </h3>
      <p className={`${gray300} ${caption}`}>배변을 시작한 시간부터 적어주면 좋아요</p>
    </div>
  );
};

export default TimeTitle;
