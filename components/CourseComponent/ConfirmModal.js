import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import {
    firebaseDB,
    collection,
    doc,
    getDocs,
    query,
    updateDoc,
    where,
} from '../../lib/firebase';

import { useAuth } from '../../context/AuthProvider';

const ConfirmModal = ({
    showModal,
    handleModalClose,
    setShowModal,
    enrolledObject,
}) => {
    const [isLoading, setIsLoading] = useState(false);

    const currentUser = useAuth().currentUser;

    const handleConfirm = async () => {
        try {
            setIsLoading(true);

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
                <div className="d-flex justify-content-center my-2">
                    <Button
                        variant="primary"
                        type="submit"
                        disabled={isLoading}
                        onClick={handleConfirm}
                    >
                        {isLoading ? 'Loading…' : 'Confirm'}
                    </Button>
                </div>
                <small>
                    <i>
                        After confirming, go to your profile to proceed further.
                    </i>
                </small>
            </Modal.Body>
        </Modal>
    );
};

export default ConfirmModal;
