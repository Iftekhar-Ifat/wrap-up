import React, { useState } from 'react';
import SubjectTab from './SubjectTab';
import course_type from '../../public/data/course_type.json';
import { Button } from 'react-bootstrap';

const ProgramTab = ({ program }) => {
    const [selectedCourseType, setSelectedCourseTyep] = useState('');
    const handleCourseTypeChange = course => {
        setSelectedCourseTyep(course);
    };
    return (
        <div>
            <div className="mb-3 p-2 border d-flex justify-content-around">
                {course_type.map(course => (
                    <Button
                        key={course.id}
                        variant={`${
                            selectedCourseType === course.key
                                ? 'primary'
                                : 'outline-primary'
                        }`}
                        className="w-50 me-2"
                        onClick={() => handleCourseTypeChange(course.key)}
                    >
                        {course.title}
                    </Button>
                ))}
            </div>
            {selectedCourseType ? (
                <SubjectTab
                    program={program}
                    course_type={selectedCourseType}
                />
            ) : null}
        </div>
    );
};

export default ProgramTab;
