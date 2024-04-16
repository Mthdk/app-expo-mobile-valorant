import * as yup from "yup";

export const schemaRegister = yup.object({
  primeiroNome: yup
    .string()
    .required("Primeiro Nome obrigatório")
    .min(3, "Informe no minímo 3 letras"),
  segundoNome: yup
    .string()
    .required("Segundo Nome obrigatório")
    .min(3, "Informe no minímo 3 letras"),
  email: yup
    .string()
    .required("Email obrigatório")
    .min(6, "Informe no minímo 6 caracteres")
    .email("E-mail informado não é valido"),
  cep: yup.string().required("CEP obrigatório").length(8, "CEP inválido"),
  rua: yup.string().required("Rua obrigatória"),
  numero: yup.string().required("Número obrigatório"),
  bairro: yup.string().required("Bairro obrigatório"),
  cidade: yup.string().required("Cidade obrigatória"),
  uf: yup.string().required("Estado obrigatório").length(2, "UF inválido"),
});
