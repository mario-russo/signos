<script setup lang="ts">
function redirect(id:number){
    useRouter().push('/horoscopo/semanal/'+id)
}
</script>
<template>
    <div>
        <cardSignos :rota="redirect"></cardsignos>
    </div>
</template>


<style scoped></style>