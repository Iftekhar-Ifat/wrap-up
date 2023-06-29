import Image from 'next/image';
import Link from 'next/link';
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
                            Look out, there is a chance, a dazzling chance
                            Already here! Then give a glance.
                        </h1>
                        <p className="text-info">
                            Let’s start settling all your unfinished syllabus.
                        </p>
                    </Col>
                    <Col lg="6" xs="12">
                        <h4 className="text-info">Popular Now</h4>
                        <div className={`${styles.course_card}`}>
                            <Image
                                className="rounded"
                                src="/assets/female-student-listening-webinar-online_74855-6461.png"
                                alt=""
                                width="340"
                                height="270"
                            />
                            <div className="p-3">
                                <h4 className="fw-bold">HSC Special Care</h4>
                                <div className="">
                                    <Link href="/courses">
                                        <button
                                            className={`${styles.detail_btn}`}
                                        >
                                            Go To Courses
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="container my-5 text-white">
                <Row>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-4 fw-bold">Live Class</h4>
                            <p className="offers">
                                All the live classes will be conducted <br />{' '}
                                through Zoom and Google Meet.
                            </p>
                        </div>
                    </Col>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-4 fw-bold">1 Course 1 Chapter</h4>
                            <p className="offers">
                                We are providing very short term courses. The
                                program is designed to cover only one <br />{' '}
                                chapter in one course.
                            </p>
                        </div>
                    </Col>
                    <Col className="p-2" lg="4" xs="6">
                        <div>
                            <h4 className="fs-4 fw-bold">
                                Solve Class Program
                            </h4>
                            <p className="offers">
                                Enroll there and settle all your confusion
                                regarding any topic.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default IntroSection;
