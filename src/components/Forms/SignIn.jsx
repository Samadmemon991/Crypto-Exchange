import { FloatingLabel, Form } from "react-bootstrap";
import Card from "../Layout/Card";

export default function SignIn() {
  return (
    <Card title={"Welcome back"}>
      <Form className="text-dark">
        <Form.Group>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Form.Group>
        <Form.Group>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
        </Form.Group>
      </Form>
    </Card>
  );
}
