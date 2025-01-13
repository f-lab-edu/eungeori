import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import useInfoStore, { StoolAttributes } from '@/app/_store/info/infoStore';
import { semiBold } from '@/app/_styles/font.css';
import { paddingSprinkles } from '@/app/_styles/padding.css';
import ContentBox from './contentBox';

const ConsistencyBox = () => {
  const stoolAttributesState = useInfoStore((state) => state.stoolAttributes);
  const setStoolAttributesState = useInfoStore((state) => state.setStoolAttributes);

  const onConsistencyChange = (value: StoolAttributes['consistency']) => {
    setStoolAttributesState({ consistency: value });
  };

  const consistencyOption: { label: string; consistency: StoolAttributes['consistency'] }[] = [
    { label: '묽음', consistency: 'thin' },
    { label: '정상', consistency: 'default' },
    { label: '딱딱', consistency: 'hard' },
  ];

  const getConsistencyImageSrc = (label: string) => {
    return stoolAttributesState.consistency === label
      ? `/svgs/poop/thin/active-${label}.svg`
      : `/svgs/poop/thin/${label}.svg`;
  };

  return (
    <div className={paddingSprinkles({ paddingBottom: 's60' })}>
      <p className={`${semiBold} ${paddingSprinkles({ paddingBottom: 's24' })}`}>묽음 정도</p>

      <div className={`${flexSprinklesFc({ gap: '16px' })}`}>
        {consistencyOption.map((image) => {
          return (
            <ContentBox
              key={image.label}
              src={getConsistencyImageSrc(image.consistency)}
              text={image.label}
              width={42.5}
              height={42.5}
              onClick={() => onConsistencyChange(image.consistency)}
              active={stoolAttributesState.consistency === image.consistency}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConsistencyBox;
