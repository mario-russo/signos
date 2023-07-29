<script setup lang="ts">

function redirect(id:number){
    useRouter().push("/horoscopo/mensal/" +id)
}
</script>
<template>
    <div>
       <CardSignos :rota="redirect"></CardSignos>
    </div>
</template>


<style scoped></style>