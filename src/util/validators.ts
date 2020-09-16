import * as yup from 'yup';

export const userValidator = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Nome deve ter no mínimo 3 caracteres.')
    .required('Nome obrigatório'),

  email: yup
    .string()
    .email('Digite um email válido')
    .required('E-mail obrigatório'),

  password: yup
    .string()
    .min(6, 'Sua senha deve conter no mínimo 6 caracteres')
    .required('Senha obrigatória'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'As senhas devem ser iguais'),
});
