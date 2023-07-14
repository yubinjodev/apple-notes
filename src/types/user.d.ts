export type User = {
  email: string;
  pw: string;
} | null;

export type DBUser = {
  [key: string]: string;
};

export type LoginFormProps = {
  openSignUpForm: () => void;
};

export type SignUpFormProps = {
  openSignInForm: () => void;
};
