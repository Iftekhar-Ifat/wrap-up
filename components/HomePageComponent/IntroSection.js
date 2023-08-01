import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../../styles/HomePage/Intro.module.css';

const IntroSection = () => {
    return (
        <div className={`container-fluid py-1 ${styles.header_container}`}>
            <div className="container my-5 mx-auto">
                <Row>
                    <Col lg="6" xs="12">
                        <h1 className={`text-white fw-bold ${styles.h1_tag}`}>
                            দেশের প্রথম SSC ও HSC এর প্রত্যেক বিষয়ের
                            চাপ্টারভিত্তিক LIVE ONLINE CLASS!
                        </h1>
                    </Col>
                    <Col lg="6" xs="12">
                        <Image
                            className="rounded img-fluid"
                            src="/assets/intro-hero.svg"
                            alt="intro-hero"
                            width={700}
                            height={500}
                        />
                    </Col>
                </Row>
            </div>
            <div className="container my-5 text-white"></div>
        </div>
    );
};

export default IntroSection;
