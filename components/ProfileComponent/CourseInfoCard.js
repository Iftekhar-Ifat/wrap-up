import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';
import CourseStatus from './CourseStatus';

const CourseInfoCard = ({ course }) => {
    const handleUpdate = () => {
        console.log(course);
    };
    return (
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
                    <Button variant="danger" className="me-4">
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onClick={handleUpdate}
                        className="ms-4"
                    >
                        Update
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CourseInfoCard;
