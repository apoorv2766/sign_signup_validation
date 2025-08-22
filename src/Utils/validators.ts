// name: alphabets + spaces only
export const isValidName = (v: string) => /^[A-Za-z ]+$/.test(v.trim());

// username: alphanumeric + . _ - only
export const isValidUsername = (v: string) => /^[A-Za-z0-9._-]+$/.test(v);

// password: same rule as username, and must not equal username
export const isValidPassword = (pwd: string, username: string) =>
  isValidUsername(pwd) && pwd !== username;

// email: simple check (assignment-level)
export const isValidEmail = (v: string) => /^\S+@\S+\.\S+$/.test(v);

// phone: country code + number (e.g. +91 2425265421 or +915472141121)
export const isValidPhone = (v: string) => /^\+\d{1,3}\s?\d{6,14}$/.test(v);
