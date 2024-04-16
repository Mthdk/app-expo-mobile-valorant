export default class PlayerModel {
  id: string;
  primeiroNome: string;
  segundoNome: string;
  email: string;
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  uf: string;

  constructor(
    id: string,
    primeiroNome: string,
    segundoNome: string,
    email: string,
    cep: string,
    rua: string,
    numero: string,
    bairro: string,
    cidade: string,
    uf: string
  ) {
    this.id = id;
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.email = email;
    this.cep = cep;
    this.rua = rua;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
  }
}
