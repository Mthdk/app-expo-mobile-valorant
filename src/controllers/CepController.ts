import CepModel from "../models/CepModel";

export class CepController {
  static async fetchCep(cep: String): Promise<CepModel | undefined> {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      console.log(JSON.stringify(data));
      if (data.erro) {
        console.log("CEP não encontrado: " + cep);
        return undefined;
      }

      const model = new CepModel(
        data.cep,
        data.logradouro,
        data.complemento,
        data.bairro,
        data.localidade,
        data.uf
      );

      return model;
    } catch (error) {
      console.log("Erro ao buscar CEP: " + error);
    }

    return undefined;
  }
}
