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
                                    <h5 className="fw-bold">
                                        Regular 1v1 Class
                                    </h5>
                                    <small>
                                        এই প্রোগ্রামে শিক্ষার্থীরা যেকোনো বিষয়ের
                                        যেকোনো চাপ্টারের জন্য Enroll করতে পারবে।
                                        যেহেতু প্রত্যেক শিক্ষার্থী একা ক্লাস
                                        করবে তাই এক্ষেত্রে নিজেদের পছন্দমতো সময়
                                        বাছাই করতে পারবে। Enroll করার পরে
                                        প্রত্যেক শিক্ষার্থীকে আলাদা আলাদা zoom
                                        link দিয়ে দেয়া হবে।
                                    </small>
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
                                        Regular 1v3 (Single)
                                    </h5>
                                    <small>
                                        এই প্রোগ্রামে একটি ক্লাসে একসাথে
                                        সর্বোচ্চ তিনজন শিক্ষার্থী থাকবে। এই
                                        শাখায় প্রত্যেক সপ্তাহে সবগুলো বিষয়ের
                                        নির্দিষ্ট কিছু চাপ্টারের জন্য ক্লাসের
                                        সময় নির্দিষ্ট থাকবে। শিক্ষার্থীরা
                                        শুধুমাত্র চলমান এই চাপ্টারগুলোর জন্য
                                        enroll করতে পারবে। Enroll করার পরে
                                        শিক্ষার্থীকে নির্দিষ্ট zoom link দিয়ে
                                        দেয়া হবে৷
                                    </small>
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
                                        Regular 1v3 (Group)
                                    </h5>
                                    <small>
                                        যদি তিনজন শিক্ষার্থী একসাথে কোনো
                                        নির্দিষ্ট চাপ্টার পড়তে চায় তাহলে তাদের
                                        জন্য এই প্রোগ্রামে। এক্ষেত্রে একজন
                                        শিক্ষার্থী তিনজনের পক্ষ থেকে enroll করতে
                                        হবে এবং অবশ্যই নিজেদের পছন্দমতো সময়
                                        বাছাই করতে পারবে৷ Enroll করার পরে যে
                                        enroll করবে তাকে zoom link দিয়ে দেয়া
                                        হবে।
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
                                        এই প্রোগ্রামে শিক্ষার্থীদের test paper
                                        সমাধান করতে গিয়ে কোনো সমস্যা দেখা দিলে
                                        তা সমাধান করে নিতে পারবে৷ যেহেতু
                                        প্রত্যেক শিক্ষার্থী একা ক্লাস করবে তাই
                                        এক্ষেত্রে নিজেদের পছন্দমতো সময় বাছাই
                                        করতে পারবে। Enroll করার পরে প্রত্যেক
                                        শিক্ষার্থীকে আলাদা আলাদা zoom link দিয়ে
                                        দেয়া হবে।
                                    </small>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={`mt-5 m-4`}>
                    <h3 className="fw-bolder fs-1">
                        Start your learning <br />
                        journey today!
                    </h3>
                    <p>
                        The best and cheapest way to deal with your drawbacks
                        and build a strong foundation on any topic.{' '}
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
