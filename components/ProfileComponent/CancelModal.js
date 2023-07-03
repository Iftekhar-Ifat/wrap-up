import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider';
import { deleteCourse } from '../../utils/clientAPI';

const CancelModal = ({ showModal, setShowModal, cancelCourse }) => {
    const [isLoading, setIsLoading] = useState(false);
    const currentUserEmail = useAuth().currentUser.email;

    const handleCancel = async () => {
        setIsLoading(true);
        await deleteCourse(currentUserEmail, cancelCourse.key);
        setIsLoading(false);
        setShowModal(false);
    };
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card>
                    <Card.Header className="d-flex justify-content-between">
                        <div>
                            {cancelCourse.program.toUpperCase()}{' '}
                            {`(${cancelCourse.subject.toUpperCase()})`}
                        </div>
                        <div>{cancelCourse.course_type.toUpperCase()}</div>
                    </Card.Header>
                    <Card.Body>
                        {cancelCourse.chapters.map(chapter => (
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
                        variant="danger"
                        type="submit"
                        disabled={isLoading}
                        onClick={handleCancel}
                    >
                        {isLoading ? 'Loading…' : 'Delete'}
                    </Button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CancelModal;
