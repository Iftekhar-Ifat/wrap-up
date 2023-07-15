import React, { useState } from 'react';
import {
    Button,
    Card,
    Form,
    FormCheck,
    FormGroup,
    FormLabel,
    Modal,
} from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider';
import {
    collection,
    doc,
    firebaseDB,
    getDocs,
    query,
    updateDoc,
    where,
} from '../../lib/firebase';

const ConfirmModal = ({
    showModal,
    handleModalClose,
    setShowModal,
    enrolledObject,
}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [formValidated, setFormValidated] = useState(false);
    const [version, setVersion] = useState('');
    const [slot, setSlot] = useState('');

    const currentUser = useAuth().currentUser;

    const handleFormSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;

        if (form.checkValidity() === false || !version || !slot) {
            e.stopPropagation();
        } else {
            setFormValidated(true);
            handleConfirm();
        }
    };

    const handleConfirm = async () => {
        try {
            setIsLoading(true);

            enrolledObject['version'] = version;
            enrolledObject['slot'] = slot;

            const usersCollection = collection(firebaseDB, 'users');
            const querySnapshot = await getDocs(
                query(usersCollection, where('email', '==', currentUser.email))
            );
            if (!querySnapshot.empty) {
                const userDocRef = doc(
                    firebaseDB,
                    'users',
                    querySnapshot.docs[0].id
                );
                // If the user document exists, update the enrolled_courses array
                await updateDoc(userDocRef, {
                    enrolled_courses: [
                        ...querySnapshot.docs[0].data().enrolled_courses,
                        enrolledObject,
                    ],
                });
                console.log('Enrollment successful');
                setShowModal(false);
            } else {
                console.log('User document does not exist');
            }
        } catch (error) {
            console.error('Error enrolling the user:', error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <Modal show={showModal} onHide={handleModalClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Enrollment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    <Card.Header className="d-flex justify-content-between">
                        <div>
                            {enrolledObject.program.toUpperCase()}{' '}
                            {`(${enrolledObject.subject.toUpperCase()})`}
                        </div>
                        <div>{enrolledObject.course_type.toUpperCase()}</div>
                    </Card.Header>
                    <Card.Body>
                        {enrolledObject.chapters.map(chapter => (
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
                <Form
                    validated={formValidated}
                    onSubmit={handleFormSubmit}
                    className="m-2"
                >
                    <FormGroup controlId="formVersion" className="m-1">
                        <FormLabel className="fw-bold">Version</FormLabel>

                        <FormCheck
                            type="checkbox"
                            id="english"
                            label="English"
                            value="english"
                            checked={version === 'english'}
                            onChange={e => setVersion(e.target.value)}
                            required={!version}
                        />

                        <FormCheck
                            type="checkbox"
                            id="bangla"
                            label="Bangla"
                            value="bangla"
                            checked={version === 'bangla'}
                            onChange={e => setVersion(e.target.value)}
                            required={!version}
                        />

                        <Form.Control.Feedback type="invalid">
                            Please select a Version.
                        </Form.Control.Feedback>
                    </FormGroup>
                    <FormGroup controlId="formSlot" className="m-1">
                        <FormLabel className="fw-bold">Slot</FormLabel>

                        <FormCheck
                            type="checkbox"
                            id="evening(4-7)"
                            label="Evening (4 - 7)"
                            value="evening(4-7)"
                            checked={slot === 'evening(4-7)'}
                            onChange={e => setSlot(e.target.value)}
                            required={!slot}
                        />

                        <FormCheck
                            type="checkbox"
                            id="night(7-10)"
                            label="Night (7 - 10)"
                            value="night(7-10)"
                            checked={slot === 'night(7-10)'}
                            onChange={e => setSlot(e.target.value)}
                            required={!slot}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please select a Slot.
                        </Form.Control.Feedback>
                    </FormGroup>
                    <div className="d-flex justify-content-center my-2">
                        <Button
                            variant="success"
                            type="submit"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Loading...' : 'Purchase'}
                        </Button>
                    </div>
                </Form>
                <div className="d-flex justify-content-center text-danger">
                    <i>
                        After confirming, go to your profile to proceed further.
                    </i>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmModal;
