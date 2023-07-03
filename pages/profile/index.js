import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthProvider';
import styles from '../../styles/ProfilePage/Profile.module.css';
import CourseInfoCard from '../../components/ProfileComponent/CourseInfoCard';
import { getCurrentUser } from '../../utils/clientAPI';

const Profile = () => {
    const currentUser = useAuth().currentUser;
    const [enrolledCourses, setEnrolledCourses] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const user = await getCurrentUser(currentUser.email);
                setEnrolledCourses(user.enrolled_courses);
            } catch (error) {
                console.error('Error fetching user document:', error);
            }
        };
        fetchUser();
    }, [currentUser.email]);

    return (
        <div className={styles.profile_wrapper}>
            <h1 className="d-flex justify-content-center">
                {currentUser.displayName}
            </h1>
            <div className="m-4">
                <h2>Purchased Courses : </h2>
                {enrolledCourses
                    ? enrolledCourses.map(course => (
                          <div key={course.key}>
                              <CourseInfoCard course={course} />
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default Profile;
