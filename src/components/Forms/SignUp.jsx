import { Button, Form, Stack } from "react-bootstrap";
import Card from "../Layout/Card";

export default function SignUp() {
  return (
    <Card title={"Register"}>
      <Form >
        <Stack gap={2}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type='textInput' required />
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' required />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' required />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Home address</Form.Label>
            <Form.Control as="textarea" rows={3} required />
          </Form.Group>
          <Form.Group controlId="cnic">
            <Form.Label>CNIC</Form.Label>
            <Form.Control type='file' accept='.doc,.docx,application/pdf' required />
          </Form.Group>
          <Button className="mt-2" type="submit" variant="dark">Sign up</Button>
        </Stack>
      </Form>
    </Card>
  );
}
