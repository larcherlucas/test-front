<script setup>
import { useFormStore } from '../stores/FormStore';
const formStore = useFormStore();

function submitForm() {
  formStore.submitForm();
}
</script>

<template>
  <div class="form-container">
    <h2>Formulaire d'inscription</h2>
    <form @submit.prevent="submitForm">
      <!-- Nom -->
      <div>
        <label for="name">Nom (obligatoire) :</label>
        <input type="text" v-model="formStore.name" id="name" />
        <span v-if="formStore.errors.name">{{ formStore.errors.name }}</span>
      </div>

      <!-- Email -->
      <div>
        <label for="email">Email (obligatoire) :</label>
        <input type="email" v-model="formStore.email" id="email" />
        <span v-if="formStore.errors.email">{{ formStore.errors.email }}</span>
      </div>

      <!-- Téléphone -->
      <div>
        <label for="phone">Téléphone (10 chiffres) :</label>
        <input type="text" v-model="formStore.phone" id="phone" maxlength="10" />
        <span v-if="formStore.errors.phone">{{ formStore.errors.phone }}</span>
      </div>

      <!-- Date de naissance -->
      <div>
        <label for="birthdate">Date de naissance (obligatoire, dans le passé) :</label>
        <input type="date" v-model="formStore.birthdate" id="birthdate" />
        <span v-if="formStore.errors.birthdate">{{ formStore.errors.birthdate }}</span>
      </div>

      <!-- Adresse -->
      <div>
        <label for="address">Adresse (maximum 300 caractères) :</label>
        <textarea v-model="formStore.address" id="address" maxlength="300"></textarea>
        <span>{{ formStore.address.length }} / 300 caractères</span>
        <span v-if="formStore.errors.address">{{ formStore.errors.address }}</span>
      </div>

      <!-- Code postal -->
      <div>
        <label for="postalCode">Code postal (5 chiffres) :</label>
        <input type="text" v-model="formStore.postalCode" id="postalCode" maxlength="5" />
        <span v-if="formStore.errors.postalCode">{{ formStore.errors.postalCode }}</span>
      </div>

      <!-- Ville -->
      <div>
        <label for="city">Ville (obligatoire) :</label>
        <input type="text" v-model="formStore.city" id="city" />
        <span v-if="formStore.errors.city">{{ formStore.errors.city }}</span>
      </div>

      <!-- Pays -->
      <div>
        <label for="country">Pays (obligatoire) :</label>
        <select v-model="formStore.country" id="country">
          <option value="">Sélectionnez un pays</option>
          <option value="France">France</option>
          <option value="Belgique">Belgique</option>
          <option value="Suisse">Suisse</option>
          <option value="Canada">Canada</option>
          <option value="Allemagne">Allemagne</option>
        </select>
        <span v-if="formStore.errors.country">{{ formStore.errors.country }}</span>
      </div>

      <!-- Mot de passe -->
      <div>
        <label for="password">Mot de passe (8 caractères minimum avec majuscule, minuscule, chiffre et caractère spécial) :</label>
        <input type="password" v-model="formStore.password" id="password" />
        <span v-if="formStore.errors.password">{{ formStore.errors.password }}</span>
      </div>

      <!-- Confirmation du mot de passe -->
      <div>
        <label for="confirmPassword">Confirmation du mot de passe :</label>
        <input type="password" v-model="formStore.confirmPassword" id="confirmPassword" />
        <span v-if="formStore.errors.confirmPassword">{{ formStore.errors.confirmPassword }}</span>
      </div>

      <button type="submit">S'inscrire</button>
    </form>

    <!-- Message de confirmation après soumission -->
    <div v-if="formStore.submitted">
      <h3>Merci pour votre inscription, {{ formStore.name }} !</h3>
    </div>
  </div>
</template>
