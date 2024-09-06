<template>
    <div class="success-message">
      <h3>Merci pour votre inscription, {{ name }} !</h3>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    name: string;
  }>();
  </script>
  
  <style scoped>
  .success-message {
    margin-top: 20px;
    color: green;
  }
  </style>
  