import { ArrayDosSignos } from "~/utils/domain/signosArray";
import { ref, computed } from "vue";

const signos = ref(ArrayDosSignos);

const getSigno = computed(() => {
  return (chave: keyof (typeof signos.value)[0], valor: string | any) => {
    return signos.value.find((signo) => signo[chave] === valor);
  };
});
export const useSignos = () => {
  return {
    signos,
    getSigno,
  };
};
