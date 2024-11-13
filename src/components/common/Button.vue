<script setup lang="ts">
defineEmits(['click']);
</script>

<template>
  <button class="custom-button" @click="$emit('click')">
    <slot />
  </button>
</template>
<style scoped>
.custom-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #3498db;
  color: white;
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #2ecc71;
}
</style>
