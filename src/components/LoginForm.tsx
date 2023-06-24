import axios from "axios";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { User, X_ACCESS_KEY, X_MASTER_KEY, baseURL } from "./SignUpForm";
import { useDispatch } from "react-redux";
import { login } from "../actions";

export type LoginFormProps = {
  openSignUpForm: () => void;
};

type Users = User[];

export const BIN_ID = "6496c4129d312622a374cf7b";
export const GET_CONFIG = {
  headers: {
    "X-Master-Key": X_MASTER_KEY,
    "X-Access-Key": X_ACCESS_KEY,
  },
};

export default function LoginForm(props: LoginFormProps) {
  const dispatch = useDispatch()

  const { openSignUpForm } = props;

  const [email, setEmail] = useState<string>();
  const [pw, setPw] = useState<string>();
  const [users, setUsers] = useState<Users>();

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handleClickSignIn = async (e: any) => {
    e.preventDefault()
    try{
      const response = await axios.get(baseURL + BIN_ID, GET_CONFIG);
      setUsers(response.data.record.users)
      users?.forEach(user => {
        if(user?.email === email && user?.pw === pw){
          if(email && pw){
            dispatch(login({email, pw, online: true}))
          }
        }
      });
    }catch(e){
      console.error(e);
    }
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
