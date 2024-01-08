import { ano } from "./ano2024";

const signos = ref([...ano]);

const getSigno = computed(() => {
  return (semana: number, nomeurl: string | any) => {
    return signos.value.find(
      (signo) => signo.nomeUrl === nomeurl && signo.semana === semana
    );
  };
});
export const useSignoDoAno = () => {
  return {
    getSigno,
  };
};
