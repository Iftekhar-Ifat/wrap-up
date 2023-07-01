import React from 'react';
import { useAuth } from '../../context/AuthProvider';
import styles from '../../styles/ProfilePage/Profile.module.css';
import CourseInfoCard from '../../components/CourseInfoCard';

const Profile = () => {
    const currentUser = useAuth().currentUser;
    return (
        <div className={styles.profile_wrapper}>
            <h1 className="d-flex justify-content-center">
                {currentUser.displayName}
            </h1>
            <div className="m-4">
                <h2>Purchased Courses : </h2>
                <CourseInfoCard />
            </div>
        </div>
    );
};

export default Profile;
