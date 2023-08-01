import React, { useState } from 'react';
import ProgramTab from '../../components/CourseComponent/ProgramTab';
import { Button } from 'react-bootstrap';

const Courses = () => {
    const [selectedProgram, setSelectedProgram] = useState('');

    const handleProgramChange = program => {
        setSelectedProgram(program);
    };

    return (
        <div>
            <div className="container mx-auto mt-5 detail-container">
                <h1 className="text-center fw-bold my-4">Available Courses</h1>
                <div className="mb-3 p-2 border rounded d-flex justify-content-around">
                    <Button
                        variant={`${
                            selectedProgram === 'ssc'
                                ? 'primary'
                                : 'outline-primary'
                        }`}
                        className="w-50 me-2"
                        onClick={() => handleProgramChange('ssc')}
                    >
                        SSC
                    </Button>
                    <Button
                        variant={`${
                            selectedProgram === 'hsc'
                                ? 'primary'
                                : 'outline-primary'
                        }`}
                        className="w-50 ms-2"
                        onClick={() => handleProgramChange('hsc')}
                    >
                        HSC
                    </Button>
                </div>
                <ProgramTab program={selectedProgram} />
            </div>
        </div>
    );
};

export default Courses;
