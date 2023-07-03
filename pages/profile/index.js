import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthProvider';
import styles from '../../styles/ProfilePage/Profile.module.css';
import CourseInfoCard from '../../components/ProfileComponent/CourseInfoCard';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { firebaseDB } from '../../lib/firebase';
import { BsInfoCircleFill } from 'react-icons/bs';
import StatusInfoModal from '../../components/ProfileComponent/StatusInfoModal';

const Profile = () => {
    const currentUser = useAuth().currentUser;
    const [enrolledCourses, setEnrolledCourses] = useState(null);

    const [showStatusInfoModal, setShowStatusInfoModal] = useState(false);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(
                collection(firebaseDB, 'users'),
                where('email', '==', currentUser.email)
            ),
            querySnapshot => {
                if (!querySnapshot.empty) {
                    const userDocSnapshot = querySnapshot.docs[0];
                    if (userDocSnapshot.exists()) {
                        const enrolledCoursesData =
                            userDocSnapshot.data().enrolled_courses;
                        setEnrolledCourses(enrolledCoursesData);
                    }
                }
            }
        );

        return () => unsubscribe(); // Cleanup the subscription on component unmount
    }, [currentUser.email]);

    return (
        <div className={styles.profile_wrapper}>
            <h1 className="d-flex justify-content-center">
                {currentUser.displayName}
            </h1>
            <div className="m-4">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>Purchased Courses:</h2>
                    <BsInfoCircleFill
                        size="30px"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowStatusInfoModal(true)}
                    />
                </div>
                {enrolledCourses
                    ? enrolledCourses.map(course => (
                          <div key={course.key}>
                              <CourseInfoCard course={course} />
                          </div>
                      ))
                    : null}
            </div>
            {showStatusInfoModal ? (
                <StatusInfoModal
                    showModal={showStatusInfoModal}
                    setShowModal={setShowStatusInfoModal}
                />
            ) : null}
        </div>
    );
};

export default Profile;
