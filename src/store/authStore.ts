import { create } from "zustand";

interface AuthState {
  username: string;
  password: string;
  confirmPassword: string;
  name: string;
  email: string;
  phone: string;
  setField: (field: keyof AuthState, value: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  username: "",
  password: "",
  confirmPassword: "",
  name: "",
  email: "",
  phone: "",
  setField: (field, value) => set({ [field]: value }),
}));
