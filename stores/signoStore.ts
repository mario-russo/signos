import { defineStore } from "pinia";
import {
  aquario,
  aries,
  cancer,
  capriconio,
  escorpiao,
  gemeos,
  leao,
  libra,
  peixes,
  sagitario,
  touro,
  virgem,
} from "~/utils/domain/aries";

export const signoStore = defineStore("signoStore", {
  state: () => {
    return {
      signos: [
        aries,
        touro,
        gemeos,
        cancer,
        leao,
        virgem,
        libra,
        escorpiao,
        sagitario,
        capriconio,
        aquario,
        peixes,
      ] as signo[],
    };
  },
  getters: {
    getBySignoId: (state) => {
      return (signoId: number) =>
        state.signos.find((signo) => signoId === signo.id);
    },
    nome: (state) => {
      return (nome: string | any) =>
        state.signos.find((signo) => signo.nome === nome);
    },
  },
});
