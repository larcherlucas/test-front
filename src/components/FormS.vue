<template>
    <div :class="['form-field', { 'has-error': error }]">
      <label :for="id">{{ label }}</label>
      <input
        v-model="modelValue"
        :type="type"
        :id="id"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="error" class="error-message">{{ error }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps<{
    id: string;
    label: string;
    type: string;
    modelValue: string;
    error?: string;
  }>();
  
  const emit = defineEmits<{
    (event: 'update:modelValue', value: string): void;
  }>();
  </script>
  
  <style scoped>
  .form-field {
    margin-bottom: 1rem;
  }
  .has-error input {
    border-color: red;
  }
  .error-message {
    color: red;
    font-size: 0.875rem;
  }
  </style>
  