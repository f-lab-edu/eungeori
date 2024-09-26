import * as flexStyles from "@styles/flex.css";
import classNames from "classnames";

interface FlexBoxProps {
  justifyContent?: "center" | "start" | "end";
  alignItems?: "center" | "start" | "end";
  children: React.ReactNode;
}

const FlexBox = ({
  justifyContent = "center",
  alignItems = "center",
}: FlexBoxProps) => {
  //
  const justifyClass = {
    center: flexStyles.justifyCenter,
    start: flexStyles.justifyStart,
    end: flexStyles.justifyEnd,
  };

  const alignClass = {
    center: flexStyles.alignCenter,
    start: flexStyles.alignStart,
    end: flexStyles.alignEnd,
  };

  return (
    <div
      className={classNames(
        flexStyles.flexBase,
        justifyClass[justifyContent],
        alignClass[alignItems]
      )}
    ></div>
  );
};

export default FlexBox;
