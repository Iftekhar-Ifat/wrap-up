import React, { useEffect, useState } from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import VerificationAlert from '../../components/AuthComponent/VerificationAlert';
import CourseInfoCard from '../../components/ProfileComponent/CourseInfoCard';
import Dashboard from '../../components/ProfileComponent/Dashboard';
import StatusInfoModal from '../../components/ProfileComponent/StatusInfoModal';
import { useAuth } from '../../context/AuthProvider';
import {
    collection,
    firebaseDB,
    onSnapshot,
    query,
    where,
} from '../../lib/firebase';
import styles from '../../styles/ProfilePage/Profile.module.css';
import Image from 'next/image';

const Profile = () => {
    const currentUser = useAuth().currentUser;
    const [enrolledCourses, setEnrolledCourses] = useState();
    const [currentUserRole, setCurrentUserRole] = useState();

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
                        setCurrentUserRole(userDocSnapshot.data().role);
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
            <h1 className="d-flex fw-bold justify-content-center">
                {currentUser.displayName}
            </h1>
            {currentUserRole === 'student' ? (
                <div>
                    <div
                        className={`${styles.card_wrapper} d-flex justify-content-between align-items-center border rounded p-2`}
                    >
                        <h2 className="fw-bold">Purchased Courses:</h2>
                        <div className="align-items-center">
                            <Image
                                src="/assets/bkash-logo.png"
                                alt="intro-hero"
                                width={30}
                                height={30}
                            />
                            <b className="me-3 ms-1">
                                01758255514 (Send Money)
                            </b>

                            <BsInfoCircleFill
                                size="30px"
                                style={{ cursor: 'pointer' }}
                                onClick={() => setShowStatusInfoModal(true)}
                            />
                        </div>
                    </div>
                    {enrolledCourses?.length ? (
                        enrolledCourses.map(course => (
                            <div key={course.key}>
                                <CourseInfoCard course={course} />
                            </div>
                        ))
                    ) : (
                        <div className="d-flex flex-column align-items-center my-4">
                            <div className="d-flex justify-content-center">
                                <Image
                                    className="rounded img-fluid"
                                    src="/assets/empty_cart.svg"
                                    alt="intro-hero"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <h2 className="mt-4 fw-bold">
                                No course purchased yet!
                            </h2>
                        </div>
                    )}
                    {currentUser.emailVerified === false ? (
                        <VerificationAlert />
                    ) : null}
                </div>
            ) : currentUserRole === 'admin' ? (
                <>
                    <Dashboard />
                    {currentUser.emailVerified === false ? (
                        <VerificationAlert />
                    ) : null}
                </>
            ) : null}
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
