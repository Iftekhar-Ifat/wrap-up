import React from 'react';
import { Badge, Button, Card } from 'react-bootstrap';

const CourseInfoCard = () => {
    return (
        <Card className="mt-4">
            <Card.Header as="h5">HSC</Card.Header>
            <Card.Body>
                <Card.Title>Course Title</Card.Title>
                <Card.Text>Course Info</Card.Text>
                <div className="m-3">
                    <span className="me-2">Course Status :</span>
                    <Badge bg="success">Completed</Badge>
                </div>
                <div className="d-flex justify-content-center">
                    <Button variant="primary">Update</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CourseInfoCard;
