import { useForm } from '@mantine/form';
import { zodResolver } from 'mantine-form-zod-resolver';
import { z } from 'zod';

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
});

export const useForgotPasswordForm = () => {
  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: zodResolver(forgotPasswordSchema),
  });

  return form;
};
