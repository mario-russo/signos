export interface signo {
  id: number;
  nome: string;
  data: string;
  nomeImage: string;
  altImage: string;
  caracteristicas?: string[];
  url?: string;
}

export interface postSigno {
  id: number;
  idSigno: number;
  nomeDoSignos: string;
  dataPost: string;
  conteudoSigno: string;
}

export interface backend {
  id: number;
  nome: string;
  data: string;
  enum: string;
  conteudo?: string;
  signo?: string;
}

export interface apiBuscaSignoTipoReferencia {
  referencia: number;
  signo?: string;
  tipo: string;
}
