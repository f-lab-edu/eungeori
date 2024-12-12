'use client';

import { StepChangeHandler } from '../../page';
import { infoContainer } from '../common/common.css';
import TimeButton from './components/timeButton';
import TimePicker from './components/timePicker';
import TimeTitle from './components/timeTitle';

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
