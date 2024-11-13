export interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  status: number;
}

export interface PaginatedResponse<T = any> extends ApiResponse<T[]> {
  page: number;
  perPage: number;
  total: number;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface FormData {
  name: string;
  email: string;
  interests: string[];
  birthDate: Date | null;
}

export interface ValidationRules {
  [key: string]: {
    required?: boolean;
    min?: number;
    max?: number;
    email?: boolean;
    date?: boolean;
    pattern?: RegExp;
    custom?: (value: any) => boolean | Promise<boolean>;
  };
}

export interface AnimationConfig {
  duration: number;
  easing: string;
  delay: number;
  target?: string;
  type?: 'fade' | 'slide' | 'scale';
}

export interface DataFilter {
  field: string;
  operator: 'equals' | 'contains' | 'gt' | 'lt' | 'between';
  value: any;
}

export interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
  };
  darkMode: boolean;
}