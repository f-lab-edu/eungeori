import { useEffect } from 'react';
import { useUserInfoStore } from '../store/user/userStore';
import { useRouter } from 'next/navigation';

export const useAuth = () => {
  const router = useRouter();
  const userInfo = useUserInfoStore((state) => state.userInfo);

  useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }
  }, []);
};
