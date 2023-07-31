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
                            চাপ্টারভিত্তিক LIVE CLASS!
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
            <div className="container my-5 text-white">
                {/* <Row>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-4 fw-bold">Regular Class</h4>
                            <p className="offers">
                                All the live classes will be conducted <br />{' '}
                                through Zoom and Google Meet.
                            </p>
                        </div>
                    </Col>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-4 fw-bold">Regular 1v3 Class</h4>
                            <p className="offers">
                                We are providing very short term courses. The
                                program is designed to cover only one <br />{' '}
                                chapter in one course.
                            </p>
                        </div>
                    </Col>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-4 fw-bold">Regular 1v3 Group</h4>
                            <p className="offers">
                                Enroll there and settle all your confusion
                                regarding any topic.
                            </p>
                        </div>
                    </Col>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-4 fw-bold">Test Paper Solving</h4>
                            <p className="offers">
                                Enroll there and settle all your confusion
                                regarding any topic.
                            </p>
                        </div>
                    </Col>
                </Row> */}
            </div>
        </div>
    );
};

export default IntroSection;
