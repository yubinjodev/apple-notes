import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


export type LoginFormProps = {
  openSignUpForm: () => void;
};

export default function LoginForm(props: LoginFormProps) {
  const { openSignUpForm } = props;

  const [email, setEmail] = useState<string>();
  const [pw, setPw] = useState<string>();
  const loginInfo = { email, pw };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleClickSignIn = async () => {
  };

  return (
    <Form className="loginform">
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={handleChangeEmail}
        />
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={handleChangePw}
        />

        <Button variant="primary" type="submit" onClick={handleClickSignIn}>
          Sign In
        </Button>

        <div>
          Don't have an account? <span onClick={openSignUpForm}>Sign Up</span>
        </div>
      </Form.Group>
    </Form>
  );
}
