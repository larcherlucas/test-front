<script setup lang="ts">
import { useRouter } from 'vue-router';
import CustomButton from '@/components/common/Button.vue';

const router = useRouter();
const goToSecondPage = () => {
  router.push('/second');
};
</script>
    
<template>
  <div class="home">
    <ListLanguage />
    <h1>Hello tout le monde voici une base vue3 sur laquelle tu peux travailler</h1>
    <custom-button @click="goToSecondPage">Suivant</custom-button>
  </div>
</template>


<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}
</style>
