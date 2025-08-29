import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export const RegisterSchema = z
  .object({
    email: z.string().email({
      message: 'Email is required',
    }),
    password: z.string().min(6, {
      message: 'Minimum 6 characters required',
    }),
    confirmPassword: z.string(),
    name: z.string().min(1, {
      message: 'Name is required',
    }),
    terms: z.boolean().refine(val => val === true, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
