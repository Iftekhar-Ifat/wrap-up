import React from 'react';
import styles from '../../styles/HomePage/Footer.module.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className={`container-fluid ${styles.footer_container} mt-5`}>
            <div className={`${styles.footer_style}`}>
                <div className={`${styles.footer_links} mt-4`}>
                    <p className="text-white">
                        <FontAwesomeIcon icon={faEnvelope} /> Email:
                        wrapup73@gmail.com
                    </p>
                    <p className="text-white">
                        <FontAwesomeIcon icon={faPhone} /> Phone: +8801758255514
                        , +8801314902906
                    </p>
                    <div className="d-flex">
                        <p className="text-white my-2 me-3">Like us on</p>
                        <SocialIcon
                            icon="facebook"
                            url="https://www.facebook.com/wrapupeducation"
                            size="30"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
