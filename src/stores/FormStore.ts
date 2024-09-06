import { defineStore } from 'pinia';

interface FormState {
  name: string;
  email: string;
  phone: string;
  birthdate: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  password: string;
  confirmPassword: string;
  submitted: boolean;
  errors: Record<string, string>;
}

export const useFormStore = defineStore('form', {
  state: (): FormState => ({
    name: '',
    email: '',
    phone: '',
    birthdate: '',
    address: '',
    postalCode: '',
    city: '',
    country: '',
    password: '',
    confirmPassword: '',
    submitted: false,
    errors: {}
  }),

  actions: {
    validateForm(): boolean {
      this.errors = {};

      if (!this.name) this.errors.name = "Le nom est obligatoire.";

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) this.errors.email = "L'email n'est pas valide.";

      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(this.phone)) this.errors.phone = "Le numéro de téléphone doit contenir exactement 10 chiffres.";

      const birthDate = new Date(this.birthdate);
      const today = new Date();
      if (!this.birthdate || birthDate >= today) this.errors.birthdate = "La date de naissance doit être une date valide dans le passé.";

      if (this.address.length > 300) this.errors.address = "L'adresse ne doit pas dépasser 300 caractères.";

      const postalCodeRegex = /^\d{5}$/;
      if (!postalCodeRegex.test(this.postalCode)) this.errors.postalCode = "Le code postal doit contenir exactement 5 chiffres.";

      if (!this.city) this.errors.city = "La ville est obligatoire.";

      if (!this.country) this.errors.country = "Le pays est obligatoire.";

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(this.password)) this.errors.password = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.";

      if (this.password !== this.confirmPassword) this.errors.confirmPassword = "Les mots de passe ne correspondent pas.";

      return Object.keys(this.errors).length === 0;
    },

    submitForm(): void {
      if (this.validateForm()) {
        this.submitted = true;
        alert('Formulaire soumis avec succès!');
      } else {
        alert('Veuillez corriger les erreurs.');
      }
    }
  }
});
