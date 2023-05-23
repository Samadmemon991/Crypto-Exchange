import { Button, FloatingLabel, Form, Stack } from "react-bootstrap";
import Card from "../Layout/Card";
import { useState } from "react";

export default function SignIn(props) {

  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [blockMsg, setBlockMsg] = useState(false);

  const validate = (e) => {
    e.preventDefault();
    const user = props.users.filter((user) => {
      return user.email === e.target.email.value;
    })[0]

    if (user === null) {
      failLogin();
    } else if (user.failedAttempts >= 3) {
      blockedUser(user.name)
    } else if (user.password === e.target.password.value) {
      successLogin()
    } else {
      user.failedAttempts++;
      props.failedAttempt(user)
    }
  }

  const successLogin = () => {
    console.log("success")
  }

  const failLogin = () => {
    console.log("fail")

  }

  const blockedUser = (name) => {
    console.log(name + " user blocked")

  }



  return (
    <Card title={"Welcome back!"}>
      <Form className="text-dark" onSubmit={validate}>
        <Stack>
          <Form.Group>
            <FloatingLabel
              controlId="email"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <FloatingLabel controlId="password" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Form.Group>
          <Button className="mt-2" type="submit" variant="dark">Sign in</Button>
        </Stack>
      </Form>
    </Card>
  );
}
