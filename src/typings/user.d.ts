export type User = {
  email: string;
  pw: string;
  online: boolean;
} | null;

export type Users = User[];

export type LoginFormProps = {
  openSignUpForm: () => void;
};

export type SignUpFormProps = {
  openSignInForm: () => void;
  openEditor: () => void;
};
