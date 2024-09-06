<template>
  <FormContainer>
    <h2>Formulaire d'inscription</h2>
    <form @submit.prevent="submitForm">
      <div class="form-fields">
        <FormField
          v-for="field in formFields"
          :key="field.id"
          :id="field.id"
          :label="field.label"
          :type="field.type"
          :options="field.options"
          v-model="formStore[field.id]"
          :error="formErrors[field.id]"
        />
      </div>
      <div class="button-container">
        <FormButton type="submit">S'inscrire</FormButton>
      </div>
      <SuccessMessage v-if="formStore.submitted" :name="formStore.name" />
    </form>
  </FormContainer>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useFormStore } from '../../stores/FormStore';
import FormField from '../FormS.vue';
import FormButton from './FormButton.vue';
import SuccessMessage from './SucessMessage.vue';
import FormContainer from './FormContainer.vue';  

const formStore = useFormStore();

const formFields = computed(() => [
  { id: 'name', label: 'Nom complet', type: 'text' },
  { id: 'email', label: 'Adresse e-mail', type: 'email' },
  { id: 'phone', label: 'Téléphone', type: 'text' },
  { id: 'birthdate', label: 'Date de naissance', type: 'date' },
  { id: 'address', label: 'Adresse', type: 'textarea' },
  { id: 'postalCode', label: 'Code postal', type: 'text' },
  { id: 'city', label: 'Ville', type: 'text' },
  { id: 'country', label: 'Pays', type: 'select', options: ['France', 'Belgique', 'Suisse', 'Maurice', 'Allemagne'] },
  { id: 'password', label: 'Mot de passe', type: 'password' },
  { id: 'confirmPassword', label: 'Confirmation du mot de passe', type: 'password' },
]);

const submitForm = () => {
  formStore.$patch(formStore);
  formStore.submitForm();
};

const formErrors = computed(() => {
  return Object.keys(formStore.errors).reduce((acc, key) => {
    acc[key] = formStore.errors[key] || '';
    return acc;
  }, {} as Record<string, string>);
});
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center; 
  margin-top: 1rem;
}

.form-fields {
  margin-bottom: 1rem;
}

h2 {
  text-align: center;
  margin-bottom: 1rem;
}
</style>
