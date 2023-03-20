import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import GoogleButton from "react-google-button";
// import { useUserAuth } from "../context/UserAuthContext";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.hangleLogin(email, password);
  };

  return (
    <>
      <div className="p-4 box mt-2" style={{width: '500px', margin: '0 auto'}}>
        <h2 className="mb-3">Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="Email address or phone number"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center" style={{width: '500px', margin: '0 auto'}}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
};

export default Login;
