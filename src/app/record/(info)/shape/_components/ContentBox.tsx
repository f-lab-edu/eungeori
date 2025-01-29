import { primary, gray300 } from '@/app/_styles/colors.css';
import { pointer } from '@/app/_styles/global.css';
import Image, { ImageProps } from 'next/image';
import { shapeContentBoxWrapper, shapeContentBox, shapeContentBoxText } from '../_styles/shape.css';

type ContentBoxProps = {
  src: string;
  text: string;
  width: ImageProps['width'];
  height: ImageProps['height'];
  active?: boolean;
  onClick: (label: string) => void;
};

const ContentBox = ({ src, text, width, height, active, onClick }: ContentBoxProps) => {
  return (
    <button className={shapeContentBoxWrapper} onClick={() => onClick(text)}>
      <div className={`${shapeContentBox} ${pointer}`}>
        <Image src={src} alt={text} width={width} height={height} />
      </div>
      <p className={`${shapeContentBoxText} ${active ? primary : gray300}`}>{text}</p>
    </button>
  );
};

export default ContentBox;
