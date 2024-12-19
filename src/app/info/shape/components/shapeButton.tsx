import Button from '@/app/components/common/Button';
import { flexSprinklesFc } from '@/app/components/common/utils/flex';
import { colors } from '@/app/styles/colors.css';
import { useRouter } from 'next/navigation';

const ShapeButton = () => {
  const router = useRouter();

  return (
    <div className={flexSprinklesFc({ gap: '16px', justifyContent: 'center' })}>
      <Button
        text="이전"
        height="59px"
        borderRadius="10px"
        onClick={() => {
          router.push('/info/time');
        }}
      />
      <Button
        text="다음"
        width="226px"
        height="59px"
        background={colors.primary}
        color={colors.white}
        borderRadius="10px"
        onClick={() => {
          router.push('/info/detail');
        }}
      />
    </div>
  );
};

export default ShapeButton;
