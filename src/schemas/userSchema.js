import * as z from 'zod';
import bcrypt from 'bcrypt';
import userRepository from '../repositories/userRepository.js';

export const createUserSchema = z.object({
    email: z.string()
        .email({ message: 'Invalid email address'})
        .min(10, { message: 'Email must be at least 10 characters long'})
        .trim()
        .refine(async (value) => {
            const result = await userRepository.findByEmail(value);
            return !result;
        }, { error: 'Email already exists' }), 
        password: z.string()
        .min(6, { message: 'Password must be at least 6 characters long'})
        .regex(/^[a-zA-Z0-9]+$/, { message: 'Password must contain at least one letter and one number'}),
    repeatPassword: z.string()
}).refine((data) => data.password === data.repeatPassword, {
    message: 'Password do not match',
    path: ['repeatPassword'],
}).transform(async ({repeatPassword, ...data}) => {
    const hashedPassword = await bcrypt.hashSync(data.password, 10);
    return {
        ...data,
        password: hashedPassword,
    };
})