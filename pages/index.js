import React from 'react';
import IntroSection from '../components/HomePageComponent/IntroSection';
import ServiceSection from '../components/HomePageComponent/ServiceSection';
import styles from '../styles/HomePage/Home.module.css';

const index = () => {
    return (
        <div>
            <div className={styles.intro_wrapper}>
                <IntroSection />
                <ServiceSection />
            </div>
        </div>
    );
};

export default index;
