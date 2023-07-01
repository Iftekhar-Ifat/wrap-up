import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import subjects_hsc from '../../public/data/subject_hsc.json';
import subjects_ssc from '../../public/data/subject_ssc.json';
import ChapterTab from './ChapterTab';

const SubjectTab = ({ program, course_type }) => {
    const [selectedSubject, setSelectedSubject] = useState('');
    const handleSubjectChange = course => {
        setSelectedSubject(course);
    };
    return (
        <div>
            <div className="mb-3 p-2 border d-flex justify-content-around">
                {program === 'ssc'
                    ? subjects_ssc.map(subject => (
                          <Button
                              key={subject.id}
                              variant={`${
                                  selectedSubject === subject.key
                                      ? 'primary'
                                      : 'outline-primary'
                              }`}
                              className="w-50 me-2"
                              onClick={() => handleSubjectChange(subject.key)}
                          >
                              {subject.title}
                          </Button>
                      ))
                    : subjects_hsc.map(subject => (
                          <Button
                              key={subject.id}
                              variant={`${
                                  selectedSubject === subject.key
                                      ? 'primary'
                                      : 'outline-primary'
                              }`}
                              className="w-50 me-2"
                              onClick={() => handleSubjectChange(subject.key)}
                          >
                              {subject.title}
                          </Button>
                      ))}
            </div>
            {selectedSubject ? (
                <ChapterTab
                    program={program}
                    course_type={course_type}
                    subject={selectedSubject}
                />
            ) : null}
        </div>
    );
};

export default SubjectTab;
