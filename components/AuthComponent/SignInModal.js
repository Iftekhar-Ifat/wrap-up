import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider';
import { firebaseDB } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const SignInModal = ({ showModal, handleModalClose, setShowModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const { login } = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            setIsLoading(true);
            await login(email, password)
                .then(() => {
                    console.log('user logged in');
                    setShowModal(false);
                })
                .catch(error => {
                    alert(error.message);
                });
        } catch (error) {
            console.log(error.message);
        } finally {
            // Reset form
            setEmail('');
            setPassword('');
            setIsLoading(false);
        }
    };

    return (
        <Modal show={showModal} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <div className="d-flex justify-content-center my-2">
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading…' : 'Sign In'}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default SignInModal;
