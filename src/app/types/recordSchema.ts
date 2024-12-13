import { z } from 'zod';
import { signinSchema } from './signinSchema';
import { signupSchema } from './signupSchema';
import { StoolAttributes } from '../store/info/infoStore';

export type RecordSchema = {
  signup: z.infer<typeof signupSchema>;
  signin: z.infer<typeof signinSchema>;
  goal: string;
  recordData: {
    date: Date;
    bowelTime: {
      hour: number;
      minute: number;
    };
    stoolAttributes: StoolAttributes;
    recordNote: string;
  }[];
};
