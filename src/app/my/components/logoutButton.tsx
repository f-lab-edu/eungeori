import Button from '@/app/components/common/Button';
import Popup from '@/app/components/common/Popup';
import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { supabaseClient } from '@/app/lib/supabaseClient';
import { supabaseAdmin } from '@/app/lib/supabaseAdmin';
import { usePopupStore } from '@/app/store/popup/PopupStore';
import { useUserInfoStore } from '@/app/store/user/userStore';
import { colors, gray300 } from '@/app/styles/colors.css';
import { caption } from '@/app/styles/font.css';
import { pointer, buttonOutLine } from '@/app/styles/global.css';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
  const router = useRouter();

  const userInfo = useUserInfoStore((state) => state.userInfo);

  const isPopupState = usePopupStore((state) => state.isPopup);
  const messageState = usePopupStore((state) => state.message);
  const setIsPopupState = usePopupStore((state) => state.setIsPopup);
  const setMessageState = usePopupStore((state) => state.setMessage);

  const onClick = async () => {
    try {
      const { error } = await supabaseClient.auth.signOut();
      if (error) {
        throw error;
      }
      router.push('/');
      return;
    } catch (e) {
      setMessageState('로그아웃에 실패했습니다. 잠시 후 다시 시도해주세요');
      setIsPopupState(true);
    }
  };

  const deleteConfirmationVisible = () => {
    setIsPopupState(true);
    setMessageState('정말 탈퇴하시겠습니까?');
  };

  const onDeleteAccount = async () => {
    const { data, error } = await supabaseAdmin.auth.admin.deleteUser(userInfo.id);

    if (error) {
      throw error;
    }

    try {
      if (data) {
        setMessageState('탈퇴 되었습니다.');
        setTimeout(() => {
          router.push('/');
        }, 5000);
      }
    } catch (e) {
      setMessageState('알 수 없는 오류가 발생했습니다.');
    } finally {
      setIsPopupState(true);
    }
  };

  const closePopup = () => {
    setIsPopupState(false);
    setMessageState('');
  };

  return (
    <>
      {isPopupState && (
        <Popup text={messageState}>
          <div className={flexSprinklesFc({ gap: '4px' })}>
            {messageState === '정말 탈퇴하시겠습니까?' ? (
              <>
                <Button
                  text="취소"
                  onClick={closePopup}
                  background={colors.primary}
                  color={colors.white}
                />
                <Button
                  text="확인"
                  onClick={() => {
                    onDeleteAccount();
                    setIsPopupState(false);
                    setMessageState('');
                  }}
                />
              </>
            ) : (
              <Button
                text="확인"
                onClick={() => {
                  setIsPopupState(false);
                  setMessageState('');
                }}
              />
            )}
          </div>
        </Popup>
      )}
      <div>
        <p className={`${caption} ${gray300}`} style={{ textAlign: 'center' }}>
          <button className={`${pointer} ${buttonOutLine}`} onClick={onClick}>
            로그아웃
          </button>{' '}
          | {''}
          <button className={`${pointer} ${buttonOutLine}`} onClick={deleteConfirmationVisible}>
            회원탈퇴
          </button>
        </p>
      </div>
    </>
  );
};

export default LogoutButton;
