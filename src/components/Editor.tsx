import { Form } from "react-bootstrap";

export default function Editor() {
  return (
    <Form>
      <Form.Control as="textarea" rows={10} />
    </Form>
  );
}
