<template>
    <button @click="toggle" type="button" class="toggle-password">
      {{ isVisible ? 'Cacher' : 'Afficher' }}
    </button>
  </template>
  
  <script setup lang="ts">
  import { defineEmits, defineProps } from 'vue';
  
  const props = defineProps<{
    isVisible: boolean;
  }>();
  
  const emit = defineEmits<{
    (event: 'toggle'): void;
  }>();
  
  const toggle = () => {
    emit('toggle');
  };
  </script>
  
  <style scoped>
  .toggle-password {
    background: none;
    border: none;
    color: blue;
    cursor: pointer;
    margin-left: 0.5rem;
  }
  </style>
  