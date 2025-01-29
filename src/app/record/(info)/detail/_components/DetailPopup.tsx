import Button from '@/app/_components/common/button';
import Popup from '@/app/_components/common/popup';
import { usePopupStore } from '@/app/_store/popup/popupStore';
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
