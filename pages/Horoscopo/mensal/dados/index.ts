import { janeiro } from "./janeiro";

const signos = ref([...janeiro]);

const getSigno = computed(() => {
  return (refe: number, nomeurl: string | any) => {
    const mes = signos.value.find(
      (signo) => signo.nomeUrl === nomeurl && signo.refe === refe
    );
    return {
      nomeDoSigno: mes.nomeDoSigno,
      nomeUrl: mes.nomeUrl,
      semama: mes.refe,
      conteudo: mes.conteudo,
    };
  };
});
export const useSignoDaMensal = () => {
  return {
    getSigno,
  };
};
