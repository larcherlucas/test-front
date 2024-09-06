<template>
    <component
      :is="componentType"
      :id="id"
      :value="value"
      @input="$emit('input', $event.target.value)"
      :type="type"
    >
      <template v-if="componentType === 'select'">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </template>
    </component>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits, computed } from 'vue';
  
  const props = defineProps<{
    id: string;
    value: string;
    type: string;
    componentType: string;
    options?: string[];
  }>();
  
  const emit = defineEmits<{
    (event: 'input', value: string): void;
  }>();
  
  const componentType = computed(() => {
    switch (props.componentType) {
      case 'textarea':
        return 'textarea';
      case 'select':
        return 'select';
      default:
        return 'input';
    }
  });
  </script>
  