import React from 'react';
import styles from '../../styles/HomePage/Footer.module.css';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import MessengerIcon from '../../public/assets/messenger.png';

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
                            +8801758255514 , +8801314902906
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
                    <div className="position-fixed fixed-bottom d-flex justify-content-end">
                        <Link href="https://m.me/wrapupeducation">
                            <Image
                                alt="messenger-icon"
                                src={MessengerIcon}
                                width="50"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
