import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';

const registerSchema = z
  .object({
    email: z.string().email({ message: 'Email inválido' }),
    password: z.string().min(8, 'No mínimo 8 caracteres').max(64, 'No máximo 64 caracteres'),
    confirmPassword: z.string().min(8, 'No mínimo 8 caracteres').max(64, 'No máximo 64 caracteres'),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas não coincidem',
        path: ['confirmPassword'],
      });
    }
  });

export const useRegisterForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: zodResolver(registerSchema),
  });

  return form;
};
