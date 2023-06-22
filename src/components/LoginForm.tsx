import { Button, Form } from "react-bootstrap"

export default function LoginForm() {
  return (
    <Form className="loginform container">
      <Form.Group >
        <Form.Control type="email" placeholder="Email"/>
        <Form.Control type="password" placeholder="Password"/>
        
        <Button variant="primary" type="submit">Sign In</Button> 

        <div>Don't have an account? <span>Sign Up</span></div>
      </Form.Group>
    </Form>
  );
}
