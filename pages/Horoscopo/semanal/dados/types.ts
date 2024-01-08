export interface typeSemana {
  nomeUrl: string;
  nomeDoSigno: string;
  semana: number;
  conteudo: esquemaConteudo[];
}
export interface esquemaConteudo {
  titulo: string;
  conteudo: string;
}
// {
//     nomeDoSigno: "",
//     nomeUrl: "",
//     semana: 2,
//     conteudo: [
//       { titulo: "", conteudo: "" },
//       { titulo: "", conteudo: "" },
//       { titulo: "", conteudo: "" },
//       { titulo: "", conteudo: "" },
//       { titulo: "", conteudo: "" },
//     ],
//  },
