import * as yup from "yup";

export const userRequestSchama = yup
  .object()
  .shape({
    username: yup
      .string()
      .required("username obrigatório")
      .min(3, "Seu username deve conter no mínimo 3 caracteres")
      .max(128, "Seu username deve conter no máximo 128 caracteres"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Sua senha deve conter pelo menos 8 caracteres")
      .max(16, "Sua senha deve conter no máximo 16 caracteres")
      .matches(/[a-z]/, "Sua senha deve conter pelo menos uma letra minúcula")
      .matches(/[A-Z]/, "Sua senha deve conter pelo menos uma letra maiúscula")
      .matches(/[0-9]/, "Sua senha deve conter pelo menos um número")
      .matches(/^(?!.*\s).{0,}$/, "Sua senha não pode conter espaços"),
  })
  .noUnknown(true);

export const transactionRequestSchema = yup
  .object()
  .shape({
    username: yup
      .string()
      .required("username obrigatório")
      .min(3, "Seu username deve conter no mínimo 3 caracteres")
      .max(128, "Seu username deve conter no máximo 128 caracteres"),
    value: yup
      .number()
      .required("Valor é obrigatório")
      .positive("Valor não pode ser negativo")
      .min(1, "Valor não pode ser menor que 1"),
  })
  .noUnknown(true);
