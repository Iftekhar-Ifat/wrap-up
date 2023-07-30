import React, { useEffect, useState } from 'react';
import task from '../../public/assets/Task.png';
import live from '../../public/assets/Live.png';
import sub from '../../public/assets/Sub.png';
import diss from '../../public/assets/Diss.png';
import { Button, Col, Row } from 'react-bootstrap';
import styles from '../../styles/HomePage/Service.module.css';
import Image from 'next/image';
import FAQ from './FAQ';

const ServiceSection = () => {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        fetch('/data/FAQ.json')
            .then(res => res.json())
            .then(data => setFaqs(data));
    }, []);
    return (
        <div>
            <div className={`container-fluid my-5 d-flex ${styles.flexxx}`}>
                <div className={`${styles.homee} container`}>
                    <Row className="gy-5">
                        <Col lg="6" xs="12">
                            <div className={`${styles.home_cards}`}>
                                <div>
                                    <Image className="mx-3" src={live} alt="" />
                                </div>
                                <div>
                                    <h5 className="fw-bold">Regular Class</h5>
                                    <small>Online live class</small>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" xs="12">
                            <div className={`${styles.home_cards}`}>
                                <div>
                                    <Image
                                        className="mx-3 my-3"
                                        src={diss}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h5 className="fw-bold">
                                        Regular 1v3 Class
                                    </h5>
                                    <small>Online live discussion</small>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" xs="12">
                            <div className={`${styles.home_cards}`}>
                                <div>
                                    <Image
                                        className="mx-3 my-3"
                                        src={task}
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h5 className="fw-bold">
                                        Regular 1v3 Group
                                    </h5>
                                    <small>
                                        Sharpen your brain for admission tests
                                    </small>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" xs="12">
                            <div className={`${styles.home_cards}`}>
                                <div>
                                    <Image className="mx-3" src={sub} alt="" />
                                </div>
                                <div>
                                    <h5 className="fw-bold">
                                        Test paper solving
                                    </h5>
                                    <small>
                                        All major subjects are available
                                    </small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={`mt-5 ${styles.right} p-4`}>
                    <h3 className="fw-bolder fs-1">
                        Start your learning <br />
                        journey today!
                    </h3>
                    <p>
                        The best and cheapest way to deal with <br /> your
                        drawbacks and build a strong <br /> foundation on any
                        topic.{' '}
                    </p>

                    <Button
                        variant="outline-primary"
                        target="_blank"
                        href="https://www.facebook.com/wrapupschool"
                        rel="noreferrer"
                    >
                        Contact Us
                    </Button>
                </div>
                <br />
            </div>
            <section
                id="faqSec"
                className="container category-container mx-auto"
            >
                <h1 className="fw-bold text-center my-5">FAQs</h1>
                {faqs.map(faq => (
                    <FAQ key={faq.id} faq={faq}></FAQ>
                ))}
            </section>
        </div>
    );
};

export default ServiceSection;
