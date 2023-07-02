import React from 'react';
import { Form } from 'react-bootstrap';

const ChapterComponent = ({ chapter, handleCheckboxChange }) => {
    return (
        <Form.Check
            type="checkbox"
            className="mb-2 d-flex align-items-center border rounded p-3"
        >
            <Form.Check.Input
                type="checkbox"
                className="ms-1"
                style={{ width: '25px', height: '25px' }}
                onChange={() => handleCheckboxChange(chapter)}
            />
            <Form.Check.Label className="flex-grow-1">
                <div className="d-flex ms-3 justify-content-between align-items-center">
                    <div>
                        <h5 className="mb-0">{chapter.chapter_name}</h5>
                        <small>Total Classes: {chapter.total_class}</small>
                    </div>
                    <div>
                        <span className="fw-bold">Price: {chapter.price}</span>
                    </div>
                </div>
            </Form.Check.Label>
        </Form.Check>
    );
};

export default ChapterComponent;
