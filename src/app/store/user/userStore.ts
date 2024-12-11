import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const IMAGE_SRC = '/image/profile.png';

type UserInfo = {
  id: string;
  nickname: string;
  avatarUrl?: string;
};

type UserInfoStore = {
  userInfo: UserInfo;
  setUserInfo: (state: UserInfo) => void;
  resetUserInfo: () => void;
};

export const useUserInfoStore = create<UserInfoStore>()(
  immer((set) => ({
    userInfo: { nickname: '', id: '', avatarUrl: IMAGE_SRC },
    setUserInfo: (state) => {
      set((draft) => {
        draft.userInfo = state;
      });
    },
    resetUserInfo: () => {
      set((draft) => {
        draft.userInfo = { nickname: '', id: '', avatarUrl: IMAGE_SRC };
      });
    },
  })),
);
