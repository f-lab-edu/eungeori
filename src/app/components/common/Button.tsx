import { colors } from "@/app/styles/colors.css";
import { buttonSprinkles, ButtonSprinkles, buttonWrapper } from "@/app/styles/common/button.css";
import { pointer } from "@/app/styles/global.css";

interface ButtonProps extends ButtonSprinkles {
  text: string;
  onClick?: () => void;
}

const Button = ({
  text,
  width = "115px",
  height = "38px",
  color = colors.primary,
  fontSize = "16px",
  background = colors.white30,
  borderRadius = "5px",
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
    <div className={`${buttonClass} ${buttonWrapper} ${pointer}`} onClick={onClick}>
      {text}
    </div>
  );
};

export default Button;
