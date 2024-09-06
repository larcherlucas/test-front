<template>
  <button :type="type" class="form-button">
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string;
}>();
</script>

<style scoped>
.form-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-block; 
}

.form-button:hover {
  background-color: #0056b3;
}
</style>
