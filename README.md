🚀 Auth UI with React, Vite & Zustand

This project is a simple authentication UI built with React, Vite, Material-UI (MUI), and Zustand for state management.
It includes fully responsive Sign Up and Login pages with form validation.

📸 Features

✅ Modern Login and Sign Up UI

✅ Built with React + Vite (fast dev build)

✅ Styled using Material UI + CSS Modules

✅ Form validation with custom validators.ts

✅ State management using Zustand (authStore & useAuthForms)

✅ Show/Hide Password feature

✅ Validation with error messages

✅ Redirect to Login after successful SignUp

🛠️ Tech Stack

React

Vite

Material UI

Zustand

📂 Folder Structure
src/
│── components/
│   ├── Login.tsx
│   ├── SignUp.tsx
│   ├── Login.module.css
│   └── SignUp.module.css
│
│── store/
│   ├── authStore.ts
│   └── useAuthForms.ts
│
│── utils/
│   └── validators.ts
│
│── App.tsx
│── main.tsx

⚡ Installation & Setup

Clone the repository

git clone https://github.com/your-username/auth-ui.git
cd auth-ui


Install dependencies

npm install


Run the development server

npm run dev


Open in browser → http://localhost:5173

🧩 Validation Rules

Name → alphabets + spaces only

Username → alphanumeric + ._- allowed

Password → same as username rules, must not equal username

Email → must be a valid format (abc@mail.com)

Phone → +<country_code> <number> (e.g., +91 9876543210)

🎯 Usage

Sign Up → Fill details → Validate → Success → Redirects to Login

Login → Enter username + password → Console log credentials
