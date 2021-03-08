import React from "react";
import { Form, Button } from "react-bootstrap";

const LeftSide = () => {
    return (
        <div>
            <Form style={{ width: "80%", marginLeft: "10%", marginTop: "10%" }}>
                <Form.Group>
                    <Form.Label>Entrer your email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Entrer your email"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Entrer your password </Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Entrer your password"
                    />
                </Form.Group>
                <Button type="submit"> Submit </Button>
            </Form>
        </div>
    );
};

export default LeftSide;
