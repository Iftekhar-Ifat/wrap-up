import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import CourseStatus from './CourseStatus';
import CancelModal from './CancelModal';
import PurchaseModal from './PurchaseModal';

const CourseInfoCard = ({ course }) => {
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [showPurchaseModal, setShowPurchaseModal] = useState(false);

    const handleUpdate = () => {
        setShowPurchaseModal(true);
    };
    const handleCancel = async () => {
        setShowCancelModal(true);
    };
    return (
        <>
            <Card className="mt-4">
                <Card.Header className="d-flex justify-content-between">
                    <div>
                        {course.program.toUpperCase()}{' '}
                        {`(${course.subject.toUpperCase()})`}
                    </div>
                    <div>{course.course_type.toUpperCase()}</div>
                </Card.Header>

                <Card.Body>
                    {course.chapters.map(chapter => (
                        <div className="border p-2" key={chapter.chapter_id}>
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
                    <CourseStatus status={course.status} />
                    <div className="d-flex justify-content-center">
                        <Button
                            variant="danger"
                            type="submit"
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>

                        <Button
                            variant="primary"
                            onClick={handleUpdate}
                            className="ms-4"
                        >
                            Purchase
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            {showCancelModal ? (
                <CancelModal
                    showModal={showCancelModal}
                    setShowModal={setShowCancelModal}
                    cancelCourse={course}
                />
            ) : null}
            {showPurchaseModal ? (
                <PurchaseModal
                    showModal={showPurchaseModal}
                    setShowModal={setShowPurchaseModal}
                    course={course}
                />
            ) : null}
        </>
    );
};

export default CourseInfoCard;
