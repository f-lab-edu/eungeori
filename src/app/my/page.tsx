'use client';

import Image from 'next/image';
import { caption, paragraph, regular, semiBold } from '../styles/font.css';
import { flexSprinklesFc } from '../components/common/utils/flex';
import { myTargetContainer } from './my.css';
import { paddingSprinkles } from '../styles/padding.css';
import { colors, gray300 } from '../styles/colors.css';
import { buttonOutLine, pointer } from '../styles/global.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LocalStorage } from '../types/localStorageSchema';
import { inputStyle } from '../components/common/input.css';
import Popup from '../components/common/Popup';
import Button from '../components/common/Button';

const Page = () => {
  const router = useRouter();
  const [goal, setGoal] = useState<string>('');
  const [isShow, setIsShow] = useState(false);

  const goalStorage = new LocalStorage('goal');
  const signinStorage = new LocalStorage('signin');
  const signupStorage = new LocalStorage('signup');
  const recordData = new LocalStorage('recordData');

  const nickname = signupStorage.get();

  const onRemoveSigninStorageClick = () => {
    signinStorage.remove();
    router.push('/');
  };

  const onRemoveUserInfo = () => {
    signinStorage.remove();
    signupStorage.remove();
    goalStorage.remove();
    recordData.remove();
    router.push('/');
    setIsShow(false);
  };

  const onGoalSave = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      goalStorage.set(goal);
    }
  };

  useEffect(() => {
    const saveGoal = goalStorage.get();
    if (saveGoal) {
      setGoal(saveGoal);
    }
  }, []);

  return (
    <>
      {isShow && (
        <Popup text="정말 탈퇴하시겠습니까?">
          <div className={flexSprinklesFc({ gap: '8px' })}>
            <Button
              text="취소"
              onClick={() => {
                setIsShow(false);
              }}
              background={colors.primary}
              color={colors.white}
            />
            <Button text="확인" onClick={onRemoveUserInfo} />
          </div>
        </Popup>
      )}
      <div>
        <div
          className={`${flexSprinklesFc({
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          })}`}
        >
          <p className={`${semiBold} ${paragraph}`}>{nickname?.nickname}님, 안녕하세요</p>
          <Image src="/image/profile.png" width={110} height={110} alt="profile" priority />
        </div>

        <div className={myTargetContainer}>
          <p className={`${caption} ${regular} ${paddingSprinkles({ paddingBottom: 's4' })}`}>
            한 줄 목표
          </p>
          <input
            className={inputStyle}
            value={goal}
            type="text"
            placeholder="목표를 적은 뒤 Enter 키를 눌러주세요"
            maxLength={30}
            onChange={(e) => {
              setGoal(e.target.value);
            }}
            onKeyDown={(e) => {
              onGoalSave(e);
            }}
          />
        </div>
      </div>

      <div>
        <p className={`${caption} ${gray300}`} style={{ textAlign: 'center' }}>
          <button className={`${pointer} ${buttonOutLine}`} onClick={onRemoveSigninStorageClick}>
            로그아웃
          </button>{' '}
          | {''}
          <button
            className={`${pointer} ${buttonOutLine}`}
            onClick={() => {
              setIsShow(true);
            }}
          >
            회원탈퇴
          </button>
        </p>
      </div>
    </>
  );
};

export default Page;
