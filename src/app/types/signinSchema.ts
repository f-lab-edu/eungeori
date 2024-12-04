import { z } from 'zod';
import { passwordSchema } from './signupSchema';

export const signinSchema = z.object({
  email: z.string().email({ message: '유효한 이메일 주소를 입력해주세요.' }),
  password: passwordSchema,
});
