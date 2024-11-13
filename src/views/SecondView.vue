<script setup lang="ts">
import { useRouter } from 'vue-router';
import CustomButton from '@/components/common/Button.vue';

const router = useRouter();
const goToHome = () => {
  router.push('/');
};
</script>

<template>
  <div class="second">
    <h1>Voilà un exemple d\'utilisation de vuerouter, c\'est pour te faciliter la vie</h1>
    <custom-button @click="goToHome">retour</custom-button>
  </div>
</template>


<style scoped>
.second {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
}
</style>
