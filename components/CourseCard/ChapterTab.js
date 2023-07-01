import React from 'react';
import { Form } from 'react-bootstrap';
import classes from '../../public/data/haha.json';

const ChapterTab = ({ program, course_type, subject }) => {
    const filteredClasses = classes.filter(
        item => item.program === program && item.subject === subject
    );

    return (
        <>
            {filteredClasses.map(item => {
                const courseTypes = item.course_type;

                if (courseTypes && courseTypes[course_type]) {
                    const chapters = courseTypes[course_type].chapters;

                    return chapters.map(chapter => (
                        <Form.Check
                            key={chapter.chapter_id}
                            type="checkbox"
                            className="mb-2 d-flex align-items-center border rounded p-3"
                        >
                            <Form.Check.Input
                                type="checkbox"
                                className="ms-1"
                                style={{ width: '25px', height: '25px' }}
                            />
                            <Form.Check.Label className="flex-grow-1">
                                <div className="d-flex ms-3 justify-content-between align-items-center">
                                    <div>
                                        <h5 className="mb-0">
                                            {chapter.chapter_name}
                                        </h5>
                                        <small>
                                            Total Classes: {chapter.total_class}
                                        </small>
                                    </div>
                                    <div>
                                        <span className="fw-bold">
                                            Price: {chapter.price}
                                        </span>
                                    </div>
                                </div>
                            </Form.Check.Label>
                        </Form.Check>
                    ));
                }

                return null;
            })}
        </>
    );
};

export default ChapterTab;
