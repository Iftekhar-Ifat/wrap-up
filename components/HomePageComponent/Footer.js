import React from 'react';
import styles from '../../styles/HomePage/Footer.module.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import MessengerIcon from '../../public/assets/messenger.png';
import FacebookIcon from '../../public/assets/fbicon.png';

const Footer = () => {
    return (
        <div>
            <div
                className={`container-fluid ${styles.footer_container} mt-5`}
                style={{ position: 'sticky', bottom: 0 }}
            >
                <div className={`${styles.footer_style}`}>
                    <div className={`${styles.footer_links} mt-4`}>
                        <p className="text-white">
                            <FontAwesomeIcon icon={faEnvelope} /> Email:
                            wrapup73@gmail.com
                        </p>
                        <p className="text-white">
                            <FontAwesomeIcon icon={faPhone} /> Phone:
                            +8801312013789 , +8801641213907
                        </p>
                        <div className="d-flex justify-content-center">
                            <Link href="https://facebook.com/wrapupschool">
                                <Image
                                    alt="facebook-icon"
                                    src={FacebookIcon}
                                    width="40"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="position-fixed fixed-bottom d-flex justify-content-end">
                        <Link href="https://m.me/wrapupschool">
                            <Image
                                alt="messenger-icon"
                                src={MessengerIcon}
                                width="50"
                            />
                        </Link>
                    </div>
                </div>
                <small className="d-flex justify-content-center text-white my-2">
                    © 2023 WrapUpSchool | All Rights Reserved
                </small>
            </div>
        </div>
    );
};

export default Footer;
