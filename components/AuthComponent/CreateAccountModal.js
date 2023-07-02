import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider';
import { firebaseDB } from '../../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

const CreateAccountModal = ({ showModal, handleModalClose, setShowModal }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const { signUp } = useAuth();

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            setIsLoading(true);
            await signUp(email, password, name)
                .then(async () => {
                    const usersCollection = collection(firebaseDB, 'users');
                    const status = 'student';
                    await addDoc(usersCollection, {
                        name,
                        email,
                        status,
                        enrolled_courses: [],
                    });
                    setShowModal(false);
                })
                .catch(error => {
                    alert(error.message);
                });
        } catch (error) {
            console.log(error.message);
        } finally {
            // Reset form
            setName('');
            setEmail('');
            setPassword('');
            setIsLoading(false);
        }
    };

    return (
        <Modal show={showModal} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Create Account</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>

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
                            {isLoading ? 'Loading…' : 'Create Account'}
                        </Button>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CreateAccountModal;
