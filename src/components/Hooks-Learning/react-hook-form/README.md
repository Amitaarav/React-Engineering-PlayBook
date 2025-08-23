# React Form with Zod & React Hook Form

This project demonstrates how to build a **form with validation** in React using modern libraries such as **React Hook Form** and **Zod**.  
It includes validation, error handling, async submission simulation, and a clean developer-friendly approach compared to manual validation.

---

## Libraries Used & Why

### 1. [React Hook Form](https://react-hook-form.com/)
- A performant, flexible, and extensible form library for React.
- Reduces boilerplate by managing form state, validation, and submission with minimal re-renders.
- Provides easy integration with validation schemas.

### 2. [Zod](https://zod.dev/)
- A TypeScript-first schema validation library.
- Used here to define and validate form fields (`email` and `password`) declaratively.
- Ensures **type safety** by inferring TypeScript types (`FormFields`) from the schema.

### 3. [@hookform/resolvers](https://react-hook-form.com/docs/useform/#resolver)
- A package that connects external schema validation libraries (like Zod, Yup) to React Hook Form.
- In this project, we use `zodResolver` to seamlessly integrate Zod validation into `useForm`.

---

## Usage
The form has two fields: Email and Password.

### Validation rules:

- Email: Required and must match a valid email pattern.

- Password: Required, minimum 6 characters.

### On submission:

- The form simulates a 2-second async operation.

- Demonstrates setting a manual root error if the submission fails.

### Example Validation Flow
- If the user submits empty fields → validation messages show (Email is required, Password is required).

- If the user enters invalid email → Invalid email address.

- If the password is too short → Password must be at least 6 characters.

- During async submission → button shows "Submitting...".

- If submission fails → Server error, please try again later.

### Potential Improvements
Integrate API calls for real backend validation.

Add more fields (username, confirm password, etc.).

Use UI libraries (e.g., Material UI, Tailwind, shadcn/ui) for better styling.

Add success message or redirection after submission.