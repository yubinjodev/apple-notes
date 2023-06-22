import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default function LoginForm() {
  return (
    <Form className="loginform">
      <Form.Group >
        <Form.Control type="email" placeholder="Email"/>
        <Form.Control type="password" placeholder="Password"/>
        
        <Button variant="primary" type="submit">Sign In</Button> 

        <div>Don't have an account? <span>Sign Up</span></div>
      </Form.Group>
    </Form>
  );
}
