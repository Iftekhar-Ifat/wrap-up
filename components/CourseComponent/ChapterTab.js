import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider';
import { getHSCcourses, getSSCcourses } from '../../utils/clientAPI';
import { generateUniqueKey } from '../../utils/random_key';
import VerificationAlert from '../AuthComponent/VerificationAlert';
import ChapterComponent from './ChapterComponent';
import ConfirmModal from './ConfirmModal';

const ChapterTab = ({ program, course_type, subject }) => {
    const currentUser = useAuth().currentUser;
    const [selectedChapters, setSelectedChapters] = useState([]);
    const [error, setError] = useState();
    const [showEnrollModal, setShowEnrollModal] = useState(false);
    const [enrolledObject, setEnrolledObject] = useState({});
    const [showVerificationAlert, setShowVerificationAlert] = useState(false);
    const [filteredHSCClasses, setFilteredHSCClasses] = useState();
    const [filteredSSCClasses, setFilteredSSCClasses] = useState();

    const handleEnrollModalClose = () => {
        setShowEnrollModal(false);
    };

    const hsc_classes = useQuery({
        queryKey: ['hsc-classes'],
        queryFn: getHSCcourses,
        cacheTime: Infinity,
        staleTime: Infinity,
    });

    const ssc_classes = useQuery({
        queryKey: ['ssc-classes'],
        queryFn: getSSCcourses,
        cacheTime: Infinity,
        staleTime: Infinity,
    });

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
        if (!currentUser) {
            setError('You need to Sign In to enroll the courses');
        } else if (!currentUser.emailVerified) {
            setShowVerificationAlert(true);
        } else {
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
                setEnrolledObject(selectedItems);
                setShowEnrollModal(true);
            } else {
                setError('No chapter is selected');
            }
        }
    };

    useEffect(() => {
        setSelectedChapters([]);
    }, [program, subject]);

    useEffect(() => {
        const processClassesData = hsc_classes.data?.filter(
            item => item.subject === subject
        );
        setFilteredHSCClasses(processClassesData);
    }, [hsc_classes.data, subject]);

    useEffect(() => {
        const processClassesData = ssc_classes.data?.filter(
            item => item.subject === subject
        );
        setFilteredSSCClasses(processClassesData);
    }, [ssc_classes.data, subject]);

    if (hsc_classes.isLoading || ssc_classes.isLoading) {
        return (
            <div className="d-flex justify-content-center">
                <Spinner animation="border" />
            </div>
        );
    }

    return (
        <>
            {filteredHSCClasses && program === 'hsc'
                ? filteredHSCClasses.map(item => {
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
                  })
                : filteredSSCClasses && program === 'ssc'
                ? filteredSSCClasses.map(item => {
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
                  })
                : null}

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

            {showVerificationAlert ? <VerificationAlert /> : null}

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
