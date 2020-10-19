import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const userValidator = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Nome deve ter no mínimo 3 caracteres.')
    .required('Nome obrigatório'),

  phone: yup
    .string()
    .matches(phoneRegExp, 'Número de telefone inválido')
    .required('O número de telefone é obrigatório.'),

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
