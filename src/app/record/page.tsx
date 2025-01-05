'use client';

import { useState } from 'react';
import RecordPage from '.';
import TimePage from './(info)/time/page';
import ShapePage from './(info)/shape/page';
import DetailPage from './(info)/detail/page';
import useConfirmPageLeave from '../hook/useConfirmPageLeave';

export type StepChangeHandler = (newStep: number) => void;

export enum Step {
  STEP1 = 0,
  STEP2,
  STEP3,
  STEP4,
}

const Page = () => {
  const [step, setStep] = useState<Step>(Step.STEP1);

  const handleButtonClick = (step: Step) => {
    setStep(step);
  };

  useConfirmPageLeave(step !== 0);

  return (
    <>
      {step === Step.STEP1 && <RecordPage onButtonClick={handleButtonClick} />}
      {step === Step.STEP2 && <TimePage onButtonClick={handleButtonClick} />}
      {step === Step.STEP3 && <ShapePage onButtonClick={handleButtonClick} />}
      {step === Step.STEP4 && <DetailPage onButtonClick={handleButtonClick} />}
    </>
  );
};

export default Page;
