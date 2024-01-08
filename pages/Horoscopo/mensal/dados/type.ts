export interface typeMes {
  nomeUrl: string;
  nomeDoSigno: string;
  refe: number;
  conteudo: esquemaConteudo[];
}
export interface esquemaConteudo {
  titulo: string;
  conteudo: string;
}

// {
//     nomeDoSigno: "",
//     nomeUrl: "",
//     mes: 1,
//     conteudo: [
//       { titulo: "Amor", conteudo: "" },
//       { titulo: "Família", conteudo: "" },
//       { titulo: "Trabalho", conteudo: "" },
//       { titulo: "Sáude", conteudo: "" },
//       { titulo: "Conselho Astral", conteudo: "" },
//     ],
//  },
