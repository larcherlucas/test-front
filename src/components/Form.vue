<script setup lang="ts">
import { ref } from 'vue';
import { useFormStore } from '../stores/FormStore';
import FormField from './FormS.vue';

const formStore = useFormStore();

const name = ref(formStore.name);
const email = ref(formStore.email);
const phone = ref(formStore.phone);
const birthdate = ref(formStore.birthdate);
const address = ref(formStore.address);
const postalCode = ref(formStore.postalCode);
const city = ref(formStore.city);
const country = ref(formStore.country);
const password = ref(formStore.password);
const confirmPassword = ref(formStore.confirmPassword);

const updateFormStore = () => {
  formStore.name = name.value;
  formStore.email = email.value;
  formStore.phone = phone.value;
  formStore.birthdate = birthdate.value;
  formStore.address = address.value;
  formStore.postalCode = postalCode.value;
  formStore.city = city.value;
  formStore.country = country.value;
  formStore.password = password.value;
  formStore.confirmPassword = confirmPassword.value;
};

const submitForm = () => {
  updateFormStore();
  formStore.submitForm();
};

const hasError = (field: string): string => formStore.errors[field] || '';
</script>

<template>
  <div class="form-container">
    <h2>Formulaire d'inscription</h2>
    <form @submit.prevent="submitForm">
      <FormField
        id="name"
        label="Nom complet (obligatoire)"
        type="text"
        v-model="name"
        :error="hasError('name')"
      />

      <FormField
        id="email"
        label="Adresse e-mail (obligatoire)"
        type="email"
        v-model="email"
        :error="hasError('email')"
      />

      <FormField
        id="phone"
        label="Téléphone (10 chiffres)"
        type="text"
        v-model="phone"
        :error="hasError('phone')"
      />

      <FormField
        id="birthdate"
        label="Date de naissance (obligatoire, dans le passé)"
        type="date"
        v-model="birthdate"
        :error="hasError('birthdate')"
      />

      <div class="form-group">
        <label for="address">Adresse (maximum 300 caractères) :</label>
        <textarea 
          v-model="address" 
          id="address" 
          maxlength="300" 
          @input="updateFormStore"
        ></textarea>
        <p>{{ address.length }} / 300 caractères</p>
        <span v-if="hasError('address')" class="error">{{ formStore.errors.address }}</span>
      </div>

      <FormField
        id="postalCode"
        label="Code postal (5 chiffres)"
        type="text"
        v-model="postalCode"
        :error="hasError('postalCode')"
      />

      <FormField
        id="city"
        label="Ville (obligatoire)"
        type="text"
        v-model="city"
        :error="hasError('city')"
      />

      <div class="form-group">
        <label for="country">Pays (obligatoire) :</label>
        <select 
          v-model="country" 
          id="country" 
          @change="updateFormStore"
          :class="{ 'input-error': hasError('country') }"
        >
          <option value="">Sélectionnez un pays</option>
          <option value="France">France</option>
          <option value="Belgique">Belgique</option>
          <option value="Suisse">Suisse</option>
          <option value="Canada">Canada</option>
          <option value="Allemagne">Allemagne</option>
        </select>
        <span v-if="hasError('country')" class="error">{{ formStore.errors.country }}</span>
      </div>

      <FormField
        id="password"
        label="Mot de passe (8 caractères minimum avec majuscule, minuscule, chiffre et caractère spécial)"
        type="password"
        v-model="password"
        :error="hasError('password')"
      />

      <FormField
        id="confirmPassword"
        label="Confirmation du mot de passe"
        type="password"
        v-model="confirmPassword"
        :error="hasError('confirmPassword')"
      />

      <button type="submit">S'inscrire</button>

      <div v-if="formStore.submitted" class="success-message">
        <h3>Merci pour votre inscription, {{ name }} !</h3>
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: black;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input, textarea, select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
  min-height: 100px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
  font-size: 0.875em;
}

.success-message {
  margin-top: 20px;
  color: green;
}
</style>
