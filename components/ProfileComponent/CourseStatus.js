import React from 'react';
import { Badge } from 'react-bootstrap';

const CourseStatus = ({ status }) => {
    let badgeVariant;

    if (status === 'Enrolled') {
        badgeVariant = 'secondary';
    } else if (status === 'In Progress') {
        badgeVariant = 'warning';
    } else if (status === 'Completed') {
        badgeVariant = 'success';
    }

    return (
        <div className="m-3">
            <b className="me-2">Course Status :</b>
            <Badge
                bg={badgeVariant}
                text={badgeVariant === 'warning' ? 'dark' : 'white'}
            >
                {status}
            </Badge>
        </div>
    );
};

export default CourseStatus;
