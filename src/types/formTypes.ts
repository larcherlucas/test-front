export interface FormState {
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
