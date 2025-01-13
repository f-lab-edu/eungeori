import { colors } from '@/app/_styles/colors.css';
import { buttonOutLine, pointer } from '@/app/_styles/global.css';
import { ButtonSprinkles, buttonSprinkles, buttonWrapper } from './button.css';

interface ButtonProps extends ButtonSprinkles {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  text,
  width = '115px',
  height = '38px',
  color = colors.primary,
  fontSize = '16px',
  background = colors.white30,
  borderRadius = '5px',
  disabled = false,
  onClick,
}: ButtonProps) => {
  const buttonClass = buttonSprinkles({
    width,
    height,
    fontSize,
    color,
    background,
    borderRadius,
  });
  return (
    <button
      className={`${buttonClass} ${buttonWrapper} ${pointer} ${buttonOutLine}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
