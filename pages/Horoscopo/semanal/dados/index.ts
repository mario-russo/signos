import { semanaAquario } from "./aquario";
import { semanaAries } from "./aries";
import { semanaCancer } from "./cancer";
import { semanaCapricornio } from "./capricornio";
import { semanaEscorpiao } from "./escorpiao";
import { semanaLeao } from "./leao";
import { semanaLibra } from "./libra";
import { semanaPeixes } from "./peixes";
import { semanaSagitario } from "./sagitario";
import { semanaTouro } from "./touro";

import { ref, computed } from "vue";
import { semanaVirgem } from "./virgem";
import { semanaGemeos } from "./gemeos";

const signos = ref([
  ...semanaAries,
  ...semanaTouro,
  ...semanaSagitario,
  ...semanaPeixes,
  ...semanaAquario,
  ...semanaCancer,
  ...semanaCapricornio,
  ...semanaEscorpiao,
  ...semanaLeao,
  ...semanaLibra,
  ...semanaVirgem,
  ...semanaGemeos,
]);

const getSigno = computed(() => {
  return (semana: number, nomeurl: string | any) => {
    return signos.value.find(
      (signo) => signo.nomeUrl === nomeurl && signo.semana === semana
    );
  };
});
export const useSignoDaSemana = () => {
  return {
    getSigno,
  };
};
