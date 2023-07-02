import React, { useEffect, useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import classes from '../../public/data/haha.json';
import ChapterComponent from './ChapterComponent';
import ConfirmModal from './ConfirmModal';
import { generateUniqueKey } from '../../utils/random_key';

const ChapterTab = ({ program, course_type, subject }) => {
    const [selectedChapters, setSelectedChapters] = useState([]);
    const [error, setError] = useState();
    const [showEnrollModal, setShowEnrollModal] = useState(false);
    const [enrolledObject, setEnrolledObject] = useState({});

    const handleEnrollModalClose = () => {
        setShowEnrollModal(false);
    };

    const filteredClasses = classes.filter(
        item => item.program === program && item.subject === subject
    );

    const handleCheckboxChange = chapter => {
        setSelectedChapters(prevSelectedChapters => {
            // Check if the chapter is already selected
            const isSelected = prevSelectedChapters.find(
                selectedChapter =>
                    selectedChapter.chapter_id === chapter.chapter_id
            );

            if (isSelected) {
                // If selected, remove it from the selected chapters
                const updatedChapters = prevSelectedChapters.filter(
                    selectedChapter =>
                        selectedChapter.chapter_id !== chapter.chapter_id
                );
                return updatedChapters;
            } else {
                // If not selected, add it to the selected chapters
                return [...prevSelectedChapters, chapter];
            }
        });
    };

    const handleEnroll = async () => {
        // Handle the enroll button click

        const randomKey = generateUniqueKey(5);
        const selectedItems = {
            key: randomKey,
            program: program,
            course_type: course_type,
            subject: subject,
            chapters: selectedChapters,
            status: 'Enrolled',
        };
        if (selectedChapters.length) {
            console.log(selectedItems);
            setEnrolledObject(selectedItems);
            setShowEnrollModal(true);
        } else {
            setError('No chapter is selected');
        }
    };

    useEffect(() => {
        setSelectedChapters([]);
    }, [program, course_type, subject]);

    return (
        <>
            {filteredClasses.map(item => {
                const courseTypes = item.course_type;

                if (courseTypes && courseTypes[course_type]) {
                    const chapters = courseTypes[course_type].chapters;

                    return chapters.map(chapter => (
                        <ChapterComponent
                            key={chapter.chapter_id}
                            chapter={chapter}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    ));
                }
                return null;
            })}
            <div className="d-flex justify-content-center m-4">
                <Button variant="primary" onClick={handleEnroll}>
                    Enroll
                </Button>
            </div>
            {error ? (
                <Alert
                    variant="danger"
                    onClose={() => setError('')}
                    dismissible
                >
                    {error}
                </Alert>
            ) : null}
            {showEnrollModal ? (
                <ConfirmModal
                    showModal={showEnrollModal}
                    handleModalClose={handleEnrollModalClose}
                    setShowModal={setShowEnrollModal}
                    enrolledObject={enrolledObject}
                />
            ) : null}
        </>
    );
};

export default ChapterTab;