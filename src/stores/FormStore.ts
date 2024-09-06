import { defineStore } from 'pinia';

// Définir les types pour l'état du formulaire
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

// Définir le store avec TypeScript
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

      // Validation du nom (obligatoire)
      if (!this.name) this.errors.name = "Le nom est obligatoire.";

      // Validation de l'email (format)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.email)) this.errors.email = "L'email n'est pas valide.";

      // Validation du téléphone (10 chiffres)
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(this.phone)) this.errors.phone = "Le numéro de téléphone doit contenir exactement 10 chiffres.";

      // Validation de la date de naissance (doit être dans le passé)
      const birthDate = new Date(this.birthdate);
      const today = new Date();
      if (!this.birthdate || birthDate >= today) this.errors.birthdate = "La date de naissance doit être une date valide dans le passé.";

      // Validation de l'adresse (maximum 300 caractères)
      if (this.address.length > 300) this.errors.address = "L'adresse ne doit pas dépasser 300 caractères.";

      // Validation du code postal (5 chiffres)
      const postalCodeRegex = /^\d{5}$/;
      if (!postalCodeRegex.test(this.postalCode)) this.errors.postalCode = "Le code postal doit contenir exactement 5 chiffres.";

      // Validation de la ville (obligatoire)
      if (!this.city) this.errors.city = "La ville est obligatoire.";

      // Validation du pays (obligatoire)
      if (!this.country) this.errors.country = "Le pays est obligatoire.";

      // Validation du mot de passe (complexité)
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(this.password)) this.errors.password = "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.";

      // Validation de la confirmation du mot de passe
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
