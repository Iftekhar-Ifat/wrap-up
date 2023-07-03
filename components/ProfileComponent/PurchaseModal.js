import React, { useState } from 'react';
import { Button, Card, Form, Modal } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider';
import { purchaseCourse } from '../../utils/clientAPI';

const PurchaseModal = ({ showModal, setShowModal, course }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [transactionID, setTransactionID] = useState('');
    const currentUserEmail = useAuth().currentUser.email;

    const handlePurchase = async e => {
        e.preventDefault();

        try {
            setIsLoading(true);
            await purchaseCourse(
                currentUserEmail,
                course.key,
                phoneNumber,
                transactionID
            )
                .then(() => {
                    setShowModal(false);
                })
                .catch(error => {
                    alert(error.message);
                });
        } catch (error) {
            console.log(error.message);
        } finally {
            // Reset form
            setPhoneNumber('');
            setTransactionID('');
            setIsLoading(false);
        }
    };
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Purchase</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    <Card.Header className="d-flex justify-content-between">
                        <div>
                            {course.program.toUpperCase()}{' '}
                            {`(${course.subject.toUpperCase()})`}
                        </div>
                        <div>{course.course_type.toUpperCase()}</div>
                    </Card.Header>
                    <Card.Body>
                        {course.chapters.map(chapter => (
                            <div
                                className="border p-2"
                                key={chapter.chapter_id}
                            >
                                <Card.Title>{chapter.chapter_name}</Card.Title>
                                <ul>
                                    <li>
                                        <b>Total Class : </b>
                                        {chapter.total_class}
                                    </li>
                                    <li>
                                        <b>Price : </b>
                                        {chapter.price}
                                    </li>
                                </ul>
                            </div>
                        ))}
                    </Card.Body>
                </Card>
                <Form onSubmit={handlePurchase} className="m-2">
                    <Form.Group controlId="formPhone" className="m-1">
                        <Form.Label>Bkash Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Your Bkash Phone Number"
                            value={phoneNumber}
                            onChange={e => setPhoneNumber(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formTransactionID" className="m-1">
                        <Form.Label>TransactionID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your Bkash TransactionID"
                            value={transactionID}
                            onChange={e => setTransactionID(e.target.value)}
                        />
                    </Form.Group>
                </Form>

                <div className="d-flex justify-content-center my-2">
                    <Button
                        variant="success"
                        type="submit"
                        disabled={isLoading}
                        onClick={handlePurchase}
                    >
                        {isLoading ? 'Loading…' : 'Purchase'}
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default PurchaseModal;
