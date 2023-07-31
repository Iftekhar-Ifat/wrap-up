import React from 'react';
import styles from '../../styles/HomePage/Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MessengerIcon from '../../public/assets/messenger.png';
import FacebookIcon from '../../public/assets/fbicon.png';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
    return (
        <div
            className={`${styles.footer_container} mt-5`}
            // style={{ position: 'sticky', bottom: 0 }}
        >
            <div className={styles.footer_style}>
                <div className={`${styles.footer_links}`}>
                    <div className="text-white m-1 pt-2">
                        <MdEmail size="22px" />
                        <span className="ms-1">Email: wrapup73@gmail.com</span>
                    </div>
                    <div className="text-white m-1">
                        <MdPhone size="22px" />
                        <span className="ms-1">
                            Phone: +8801312013789 , +8801641213907
                        </span>
                    </div>
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
            <small className="d-flex justify-content-center text-white mt-1 pb-1">
                © 2023 WrapUpSchool | All Rights Reserved
            </small>
        </div>
    );
};

export default Footer;
