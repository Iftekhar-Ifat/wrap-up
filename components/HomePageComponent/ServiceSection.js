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
        <>
            <div className={styles.wrapper}>
                <div className="container-fluid pt-5 pb-2 d-flex flex-column align-items-center">
                    <div className="container mb-5">
                        <Row>
                            <Col lg="6" xs="12" className="h-100">
                                <div
                                    className={`${styles.card_body} card p-4 m-3`}
                                    style={{
                                        border: 'none',
                                        boxShadow: '#c6c6c6 5px 5px 10px',
                                    }}
                                >
                                    <div>
                                        <Image
                                            className="my-2"
                                            src={live}
                                            alt="regular_card"
                                        />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold">
                                            Regular 1v1 Class
                                        </h5>
                                        <small>
                                            এই প্রোগ্রামে শিক্ষার্থীরা যেকোনো
                                            বিষয়ের যেকোনো চাপ্টারের জন্য Enroll
                                            করতে পারবে। যেহেতু প্রত্যেক
                                            শিক্ষার্থী একা ক্লাস করবে তাই
                                            এক্ষেত্রে নিজেদের পছন্দমতো সময় বাছাই
                                            করতে পারবে। Enroll করার পরে প্রত্যেক
                                            শিক্ষার্থীকে আলাদা আলাদা zoom link
                                            দিয়ে দেয়া হবে।
                                        </small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" xs="12" className="h-100">
                                <div
                                    className={`${styles.card_body} card p-4 m-3`}
                                    style={{
                                        border: 'none',
                                        boxShadow: '#c6c6c6 5px 5px 10px',
                                    }}
                                >
                                    <div>
                                        <Image
                                            className="my-2"
                                            src={diss}
                                            alt="1v3_card"
                                        />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold">
                                            Regular 1v3 (Single)
                                        </h5>
                                        <small>
                                            এই প্রোগ্রামে একটি ক্লাসে একসাথে
                                            সর্বোচ্চ তিনজন শিক্ষার্থী থাকবে। এই
                                            শাখায় প্রত্যেক সপ্তাহে সবগুলো বিষয়ের
                                            নির্দিষ্ট কিছু চাপ্টারের জন্য
                                            ক্লাসের সময় নির্দিষ্ট থাকবে।
                                            শিক্ষার্থীরা শুধুমাত্র চলমান এই
                                            চাপ্টারগুলোর জন্য enroll করতে পারবে।
                                            Enroll করার পরে শিক্ষার্থীকে
                                            নির্দিষ্ট zoom link দিয়ে দেয়া হবে৷
                                        </small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" xs="12" className="h-100">
                                <div
                                    className={`${styles.card_body} card p-4 m-3`}
                                    style={{
                                        border: 'none',
                                        boxShadow: '#c6c6c6 5px 5px 10px',
                                    }}
                                >
                                    <div>
                                        <Image
                                            className="my-2"
                                            src={task}
                                            alt="1v3Group_card"
                                        />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold">
                                            Regular 1v3 (Group)
                                        </h5>
                                        <small>
                                            যদি তিনজন শিক্ষার্থী একসাথে কোনো
                                            নির্দিষ্ট চাপ্টার পড়তে চায় তাহলে
                                            তাদের জন্য এই প্রোগ্রামে। এক্ষেত্রে
                                            একজন শিক্ষার্থী তিনজনের পক্ষ থেকে
                                            enroll করতে হবে এবং অবশ্যই নিজেদের
                                            পছন্দমতো সময় বাছাই করতে পারবে৷
                                            Enroll করার পরে যে enroll করবে তাকে
                                            zoom link দিয়ে দেয়া হবে।
                                        </small>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="6" xs="12" className="h-100">
                                <div
                                    className={`${styles.card_body} card p-4 m-3`}
                                    style={{
                                        border: 'none',
                                        boxShadow: '#c6c6c6 5px 5px 10px',
                                    }}
                                >
                                    <div>
                                        <Image
                                            className="my-2"
                                            src={sub}
                                            alt="test_paper_card"
                                        />
                                    </div>
                                    <div>
                                        <h5 className="fw-bold">
                                            Test paper solving
                                        </h5>
                                        <small>
                                            এই প্রোগ্রামে শিক্ষার্থীদের test
                                            paper সমাধান করতে গিয়ে কোনো সমস্যা
                                            দেখা দিলে তা সমাধান করে নিতে পারবে৷
                                            যেহেতু প্রত্যেক শিক্ষার্থী একা ক্লাস
                                            করবে তাই এক্ষেত্রে নিজেদের পছন্দমতো
                                            সময় বাছাই করতে পারবে। Enroll করার
                                            পরে প্রত্যেক শিক্ষার্থীকে আলাদা
                                            আলাদা zoom link দিয়ে দেয়া হবে।
                                        </small>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <div className="container mt-5 text-center">
                <h3 className="fw-bolder fs-1 mb-5">
                    Start your learning <br />
                    journey today!
                </h3>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p style={{ textAlign: 'justify' }}>
                            Our program offers short-term live courses tailored
                            to cover one chapter each. Many SSC and HSC students
                            face setbacks and academic challenges, leading to
                            distress and demotivation. If you&apos;re in such a
                            situation, consider taking action to complete your
                            unfinished work. We&apos;re here to support you on
                            this journey, providing an effective way to catch up
                            on your syllabus and succeed in the challenge
                            you&apos;ve undertaken. With young instructors from
                            BUET and DMC, every course will be enjoyable and
                            fruitful.
                        </p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <Image
                            className="rounded img-fluid"
                            src="/assets/service_hero.svg"
                            alt="intro-hero"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
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
        </>
    );
};

export default ServiceSection;
