'use client';

import { StepChangeHandler } from '../../page';
import { infoContainer } from '../_common/common.css';
import TimeButton from './_components/timeButton';
import TimePicker from './_components/timePicker';
import TimeTitle from './_components/timeTitle';

const TimePage = ({ onButtonClick }: { onButtonClick: StepChangeHandler }) => {
  return (
    <article className={infoContainer}>
      <TimeTitle />
      <div>
        <TimePicker />
      </div>

      <TimeButton onButtonClick={onButtonClick} />
    </article>
  );
};

export default TimePage;
