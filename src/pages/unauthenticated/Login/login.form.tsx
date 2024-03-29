import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(8, 'No mínimo 8 caracteres').max(64, 'No máximo 64 caracteres'),
});

export const useLoginForm = () => {
  const form = useForm({
    initialValues: {
      email: 'teste@dev.com',
      password: '12345678',
    },
    validate: zodResolver(loginSchema),
  });

  return form;
};
