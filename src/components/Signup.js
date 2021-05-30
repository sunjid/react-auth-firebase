import React, {useRef} from 'react'
import { Container, Button, Card, Form, Alert } from 'react-bootstrap'
export const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    return (
        <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
        <div className="w-100" style={{ maxWidth: "400px" }}>
            <Card className="w-100" style={{ maxWidth: "400px" }}>
                <Card.Body>
                    <h2 className="text-center mb-5">Sign Up</h2>
                    <Form>
                        <Form.Group id="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control ref={nameRef} type="text" required />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control ref={emailRef} type="email" required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control ref={passwordRef} type="password" required />
                        </Form.Group>
                        <Form.Group id="confirm-password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                            ref={confirmPasswordRef}
                            type="password"
                            required
                            />
                        </Form.Group>
                        <Button className="w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already Have an Account? Log In!
            </div>
            
        </div>
        </Container>
    )
}

export default Signup;