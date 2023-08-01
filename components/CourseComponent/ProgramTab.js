import React, { useState } from 'react';
import SubjectTab from './SubjectTab';
import course_type from '../../public/data/course_type.json';
import { Button } from 'react-bootstrap';
import Image from 'next/image';

const ProgramTab = ({ program }) => {
    const [selectedCourseType, setSelectedCourseTyep] = useState('');
    const handleCourseTypeChange = course => {
        setSelectedCourseTyep(course);
    };
    return (
        <div>
            <div className="mb-3 p-2 border rounded d-flex justify-content-around">
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
            ) : (
                <div className="d-flex flex-column align-items-center my-4">
                    <div className="d-flex justify-content-center">
                        <Image
                            className="rounded img-fluid"
                            src="/assets/no_courses.svg"
                            alt="intro-hero"
                            width={300}
                            height={300}
                        />
                    </div>
                    <h2 className="mt-4 fw-bold">No courses selected yet!</h2>
                </div>
            )}
        </div>
    );
};

export default ProgramTab;
