import { Note } from "./notes";

export type User = {
  email: string;
  pw: string;
} | null;

export type Users = User[] | null;

export type LoginFormProps = {
  openSignUpForm: () => void;
};

export type SignUpFormProps = {
  openSignInForm: () => void;
  openEditor: () => void;
};
