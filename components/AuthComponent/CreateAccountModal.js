import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider';
import { addDoc, collection } from '../../lib/firebase';

const CreateAccountModal = ({ showModal, handleModalClose, setShowModal }) => {
    const route = useRouter();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
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
                    const role = 'student';
                    await addDoc(usersCollection, {
                        name,
                        email,
                        phone,
                        role,
                        enrolled_courses: [],
                    });
                    setShowModal(false);
                    route.push('/profile');
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
            setPhone('');
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
                            required
                            type="text"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter your Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="phoneNumber">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            required
                            type="tel"
                            placeholder="Enter your Phonenumber"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Enter your Password"
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
