import Button from '@/app/components/common/Button';
import Popup from '@/app/components/common/Popup';
import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { colors } from '@/app/styles/colors.css';
import { pointer } from '@/app/styles/global.css';

const RecordPopup = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <Popup text="내용을 삭제하시겠습니까?">
        <div className={`${flexSprinklesFc({ gap: '16px' })} ${pointer}`}>
          <Button text="취소" onClick={onClick} />
          <Button text="삭제" color={colors.white} background={colors.primary} onClick={onClick} />
        </div>
      </Popup>
    </>
  );
};

export default RecordPopup;
