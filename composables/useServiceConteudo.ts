import { ref } from "vue";

const url = useRuntimeConfig().public.baseUrl;
const path = "conteudo/signo/";

const resultado_formatado = reactive<backend>({
  id: 0,
  nome: "",
  data: "",
  enum: "",
});
export async function useServiceConteudo(signo: any) {
  let resultado_api = useFetch<backend[], backend>(url + path + signo).data;

  if (resultado_api.value === null) {
    return resultado_formatado;
  } else {
    resultado_formatado.data = resultado_api.value[0].data;
    resultado_formatado.conteudo = resultado_api.value[0].conteudo;
    resultado_formatado.signo = resultado_api.value[0].signo;
    resultado_formatado.id = resultado_api.value[0].id;
    resultado_formatado.nome = resultado_api.value[0].nome;
    return resultado_formatado;
  }
}
export default useServiceConteudo;
