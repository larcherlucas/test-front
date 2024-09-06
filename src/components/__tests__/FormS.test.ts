import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import FormField from '@/components/FormS.vue'; 

describe('FormField.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(FormField, {
      props: {
        id: 'email',
        label: 'Email',
        type: 'email',
        modelValue: '',
      },
    });
    expect(wrapper.text()).toContain('Email');
  });

  it('shows validation icon when valid email is provided', async () => {
    const wrapper = mount(FormField, {
      props: {
        id: 'email',
        label: 'Email',
        type: 'email',
        modelValue: '',
      },
    });

    await wrapper.find('input').setValue('test@example.com');
    await wrapper.vm.$nextTick(); 

    expect(wrapper.find('.success-check').exists()).toBe(true);
  });

  it('shows error icon when invalid email is provided', async () => {
    const wrapper = mount(FormField, {
      props: {
        id: 'email',
        label: 'Email',
        type: 'email',
        modelValue: '',
      },
    });

    await wrapper.find('input').setValue('invalid-email');
    await wrapper.vm.$nextTick(); 

    expect(wrapper.find('.error-check').exists()).toBe(true);
  });
});
