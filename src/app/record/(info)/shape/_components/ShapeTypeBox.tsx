import { flexSprinklesFc } from '@/app/_components/common/utils/flex';
import useInfoStore, { StoolAttributes } from '@/app/_store/info/infoStore';
import { semiBold } from '@/app/_styles/font.css';
import { paddingSprinkles } from '@/app/_styles/padding.css';
import ShapeContentBox from './contentBox';

const ShapeTypeBox = () => {
  const stoolAttributesState = useInfoStore((state) => state.stoolAttributes);
  const setStoolAttributesState = useInfoStore((state) => state.setStoolAttributes);

  const onShapeChange = (value: StoolAttributes['shapeType']) => {
    setStoolAttributesState({ shapeType: value });
  };

  const getShapeTypeImageSrc = (level: number) => {
    return stoolAttributesState.shapeType === `poop-${level}`
      ? `/svgs/poop/active-poop-${level}.svg`
      : `/svgs/poop/poop-${level}.svg`;
  };

  const shapeTypeOption: {
    label: string;
    width: number;
    height: number;
    shape: StoolAttributes['shapeType'];
  }[] =
    //
    [
      { label: '단단한 덩어리', width: 71, height: 31, shape: 'poop-1' },
      { label: '단단한 소시지', width: 63, height: 30, shape: 'poop-2' },
      { label: '표면에 균열 있는 소시지', width: 67, height: 25, shape: 'poop-3' },
      { label: '매끈한 소시지', width: 70, height: 14, shape: 'poop-4' },
      { label: '부드러운 덩어리', width: 59, height: 31, shape: 'poop-5' },
      { label: '흐물흐물한 덩어리', width: 69, height: 33, shape: 'poop-6' },
      { label: '완전한 액체', width: 68, height: 90, shape: 'poop-7' },
    ];

  return (
    <div className={paddingSprinkles({ paddingBottom: 's68' })}>
      <p className={`${semiBold} ${paddingSprinkles({ paddingBottom: 's24' })}`}>변의 모양</p>

      <div className={`${flexSprinklesFc({ gap: '16px', flexWrap: 'wrap' })}`}>
        {shapeTypeOption.map((image, idx) => {
          return (
            <ShapeContentBox
              key={image.label}
              src={getShapeTypeImageSrc(idx + 1)}
              text={image.label}
              width={image.width}
              height={image.height}
              onClick={() => onShapeChange(image.shape)}
              active={stoolAttributesState.shapeType === image.shape}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShapeTypeBox;
