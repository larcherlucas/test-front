<template>
  <div :class="['form-field', { 'has-error': error, 'is-valid': isValid && isShowCheck }]">
    <label :for="id">{{ label }}</label>
    <div class="input-container">
      <component
        :is="componentType"
        :id="id"
        :value="modelValue"
        @input="handleInput"
        :type="inputType"
        :placeholder="placeholder"
        class="form-input"
      >
        <template v-if="componentType === 'select'">
          <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
        </template>
      </component>

      <!-- Icône de validation ✔ à droite pour les champs valides sauf pour adresse et nom complet -->
      <span v-if="isValid && isShowCheck" class="success-check">✔</span>
    </div>
    <span v-if="error" class="error-message">{{ error }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { emailRegex, phoneRegex, postalCodeRegex, isDateInPast } from '../validator/validate';

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

const isPasswordField = computed(() => props.type === 'password');
const isAddressField = computed(() => props.id === 'address');
const isNameField = computed(() => props.id === 'name');

const inputType = computed(() => {
  return isPasswordField.value ? 'password' : 'text';
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

const isValid = ref(false);
const isShowCheck = computed(() => !isAddressField.value && !isNameField.value);

const handleInput = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emit('update:modelValue', value);

  if (props.type === 'email') {
    isValid.value = emailRegex.test(value);
  } else if (props.id === 'phone') {
    isValid.value = phoneRegex.test(value);
  } else if (props.id === 'postalCode') {
    isValid.value = postalCodeRegex.test(value);
  } else if (props.type === 'date') {
    isValid.value = isDateInPast(value);
  } else if (props.type === 'text' || props.type === 'textarea' || props.type === 'select') {
    isValid.value = value.trim() !== '';
  } else {
    isValid.value = false;
  }
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
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 400px;
}

.form-input {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.has-error .form-input {
  border-color: red;
}

.is-valid .form-input {
  border-color: green;
}

.success-check {
  position: absolute;
  right: 10px;
  font-size: 1.25rem;
  color: green;
}
</style>
