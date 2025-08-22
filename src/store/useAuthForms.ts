import { create } from "zustand";
import {
  isValidName,
  isValidUsername,
  isValidPassword,
  isValidEmail,
  isValidPhone,
} from "../Utils/validators";

type SignupKeys = "name" | "username" | "password" | "confirmPassword" | "email" | "phone";
type LoginKeys = "loginUsername" | "loginPassword";

type Errors = Partial<Record<SignupKeys | LoginKeys, string>>;

interface AuthFormState {
  // signup
  name: string;
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone: string;

  // login
  loginUsername: string;
  loginPassword: string;

  errors: Errors;

  setField: (key: SignupKeys | LoginKeys, value: string) => void;
  resetSignup: () => void;
  resetLogin: () => void;

  validateSignup: () => boolean;
  validateLogin: () => boolean;
}

export const useAuthForms = create<AuthFormState>((set, get) => ({
  // signup defaults
  name: "",
  username: "",
  password: "",
  confirmPassword: "",
  email: "",
  phone: "",

  // login defaults
  loginUsername: "",
  loginPassword: "",

  errors: {},

  setField: (key, value) =>
    set((s) => ({
      ...s,
      [key]: value,
      errors: { ...s.errors, [key]: undefined }, // clear field error on change
    })),

  resetSignup: () =>
    set((s) => ({
      ...s,
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      phone: "",
      errors: {},
    })),

  resetLogin: () =>
    set((s) => ({
      ...s,
      loginUsername: "",
      loginPassword: "",
      errors: {},
    })),

  validateSignup: () => {
    const { name, username, password, confirmPassword, email, phone } = get();
    const errors: Errors = {};

    if (!isValidName(name)) errors.name = "Name should contain alphabets only";
    if (!isValidUsername(username))
      errors.username = "Username can use A-Z a-z 0-9 . _ - only";
    if (!isValidPassword(password, username))
      errors.password = "Password must follow username rules and not equal username";
    if (confirmPassword !== password) errors.confirmPassword = "Passwords must match";
    if (!isValidEmail(email)) errors.email = "Enter a valid email";
    if (!isValidPhone(phone)) errors.phone = "Use +<Country Code> <Number>, e.g. +91 3532532653";

    set({ errors });
    return Object.keys(errors).length === 0;
  },

  validateLogin: () => {
    const { loginUsername, loginPassword } = get();
    const errors: Errors = {};
    if (!loginUsername) errors.loginUsername = "Required";
    if (!loginPassword) errors.loginPassword = "Required";
    set({ errors });
    return Object.keys(errors).length === 0;
  },
}));
