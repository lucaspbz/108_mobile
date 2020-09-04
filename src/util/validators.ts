import * as yup from 'yup';

export const userValidator = yup.object().shape({
  name: yup.string().min(3).required(),

  email: yup.string().email().required(),

  password: yup.string().min(6).required(),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), undefined], 'Passwords must match!'),
});
