import Button from '@/app/_components/common/Button';
import Popup from '@/app/_components/common/Popup';
import { usePopupStore } from '@/app/_store/popup/PopupStore';
import { colors } from '@/app/_styles/colors.css';

const DetailPopup = () => {
  const detailPopupState = usePopupStore((state) => state.openPopup);
  const setDetailPopupState = usePopupStore((state) => state.setOpenPopup);

  return (
    <>
      {detailPopupState && (
        <Popup>
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
