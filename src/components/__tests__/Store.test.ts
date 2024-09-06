import { describe, it, expect, vi } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';
import { useFormStore } from '@/stores/FormStore'; 

describe('FormStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with default values', () => {
    const store = useFormStore();
    expect(store.name).toBe('');
    expect(store.errors).toEqual({});
  });

  it('validates email correctly', () => {
    const store = useFormStore();
    store.email = 'test@example.com';
    expect(store.validateForm()).toBe(true);
    store.email = 'invalid-email';
    expect(store.validateForm()).toBe(false);
  });

  it('submits the form successfully with valid data', () => {
    const store = useFormStore();
    store.name = 'John Doe';
    store.email = 'john.doe@example.com';
    store.phone = '1234567890';
    store.birthdate = '01/01/1990';
    store.address = '123 Main St';
    store.postalCode = '12345';
    store.city = 'Anytown';
    store.country = 'Country';
    store.password = 'Password1!';
    store.confirmPassword = 'Password1!';

    store.submitForm();
    expect(store.submitted).toBe(true);
  });
});
