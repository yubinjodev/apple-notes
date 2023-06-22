import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export type SignUpFormProps = {
  openSignInForm:()=>void;
}

export default function SignUpForm(props: SignUpFormProps) {
  const {openSignInForm} = props;

  return (
    <Form className="signupform container">
      <Form.Group>
        <Form.Control type="email" placeholder="Email" />
        <Form.Control type="password" placeholder="Password" />

        <Button variant="primary" type="submit">
          Sign Up
        </Button>

        <div>
          Already have an account? <span onClick={openSignInForm}>Sign In</span>
        </div>
      </Form.Group>
    </Form>
  );
}
