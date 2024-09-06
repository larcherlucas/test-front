<template>
  <div :class="['form-field', { 'has-error': error }]">
    <label :for="id">{{ label }}</label>
    <div class="input-container">
      <component
        :is="componentType"
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="inputType"
        :placeholder="placeholder"
        class="form-input"
      >
        <template v-if="componentType === 'select'">
          <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </template>
      </component>
      <button v-if="isPassword" @click="togglePasswordVisibility" type="button" class="toggle-password">
        {{ isPasswordVisible ? 'Cacher' : 'Afficher' }}
      </button>
    </div>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
  id: string;
  label: string;
  type: string;
  modelValue: string;
  error?: string;
  options?: string[];
  placeholder?: string;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: string): void;
}>();

const isPassword = computed(() => props.type === 'password');
const isPasswordVisible = ref(false);

const inputType = computed(() => {
  return isPassword.value && !isPasswordVisible.value ? 'password' : 'text';
});

const componentType = computed(() => {
  switch (props.type) {
    case 'textarea':
      return 'textarea';
    case 'select':
      return 'select';
    case 'date':
      return 'input';
    default:
      return 'input';
  }
});

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};
</script>

<style scoped>
.form-field {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.form-input {
  width: 100%;
  max-width: 400px; 
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.has-error .form-input {
  border-color: red;
}

.error-message {
  color: red;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.toggle-password {
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  position: absolute; 
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
