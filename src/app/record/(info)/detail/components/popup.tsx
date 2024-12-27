import Button from '@/app/components/common/Button';
import Popup from '@/app/components/common/Popup';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { colors } from '@/app/styles/colors.css';

const DetailPopup = () => {
  const detailPopupState = usePopupStore((state) => state.openPopup);
  const setDetailPopupState = usePopupStore((state) => state.setIsPopup);
  const detailPopupMessageState = usePopupStore((state) => state.message);

  return (
    <>
      {detailPopupState && (
        <Popup text={detailPopupMessageState}>
          <Button
            text="닫기"
            background={colors.primary}
            color={colors.white}
            onClick={() => {
              setDetailPopupState(false);
            }}
          />
        </Popup>
      )}
    </>
  );
};

export default DetailPopup;
