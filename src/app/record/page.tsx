"use client";

import { useState } from "react";
import RecordPage from ".";
import TimePage from "./(info)/time/page";
import ShapePage from "./(info)/shape/page";
import DetailPage from "./(info)/detail/page";

export type StepChangeHandler = (newStep: number) => void;

const Page = () => {
  const [step, setStep] = useState(0);

  const handleButtonClick = (step: number) => {
    setStep(step);
  };

  return (
    <>
      {step === 0 && <RecordPage onButtonClick={handleButtonClick} />}
      {step === 1 && <TimePage onButtonClick={handleButtonClick} />}
      {step === 2 && <ShapePage onButtonClick={handleButtonClick} />}
      {step === 3 && <DetailPage onButtonClick={handleButtonClick} />}
    </>
  );
};

export default Page;
