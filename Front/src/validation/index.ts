import * as yup from "yup";

export const userRequestSchama = yup.object().shape({
  username: yup
    .string()
    .required("Usuário obrigatório")
    .min(3, "Seu username deve conter no mínimo 3 caracteres")
    .max(16, "Seu username deve conter no máximo 16 caracteres"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "Sua senha deve conter pelo menos 8 caracteres")
    .max(16, "Sua senha deve conter no máximo 16 caracteres")
    .matches(/[a-z]/, "Sua senha deve conter pelo menos uma letra minúcula")
    .matches(/[A-Z]/, "Sua senha deve conter pelo menos uma letra maiúscula")
    .matches(/[0-9]/, "Sua senha deve conter pelo menos um número")
    .matches(/^(?!.*\s).{0,}$/, "Sua senha não pode conter espaços"),
  confirmPassword: yup.string().when("$title", (title) => {
    if (title === "Cadastro") {
      return yup
        .string()
        .required("Confimação obrigatória")
        .oneOf([yup.ref("password"), null], "Senhas diferentes");
    }
    return yup.string();
  }),
});

export const transactionRequestSchama = yup.object().shape({
  username: yup
    .string()
    .required("Usuário obrigatório")
    .min(3, "Seu username deve conter no mínimo 3 caracteres")
    .max(16, "Seu username deve conter no máximo 16 caracteres"),
  value: yup
    .number()
    .typeError("Deve ser um número válido")
    .required("Valor é obrigatório")
    .positive("Valor não pode ser negativo")
    .min(1, "Valor não pode ser menor que 1"),
});
