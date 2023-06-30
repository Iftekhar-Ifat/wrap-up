import Image from 'next/image';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className="container about-container">
            <Row className="mx-auto my-5">
                <Col lg="5" xs="12">
                    <div className="border border-1 rounded p-3 my-5">
                        <h1 className="text-seconday text-center fw-bold">
                            About Us
                        </h1>
                        <p className="text-success p-2">
                            Our program is first ever in Bangladesh, to provide
                            you short term courses and is designed to cover only
                            one chapter in one course. So,wrap up your issues,
                            your worries, your depression that are already
                            existing. We can&apos;t deny the fact that as a
                            student, one&apos;s all worries centered around his
                            performance in study because all of you might have
                            experienced an unexplainable happiness all the time
                            after finish, giving an exam even if it is done with
                            least satisfaction. The fact is that, by the time
                            when a student starts to leave behind his
                            today&apos;s work for tomorrow, he also starts to
                            lag from others and in a big frame, our
                            psychological set up is favorable to make him easily
                            depressed in such situation. If you are already in
                            such situation, what step do you want to take? We
                            are pretty much sure that you don&apos;t want to
                            leave everything as it is and be depressed all the
                            time. YEAH, you have to take challenge to settle all
                            your unfinished works right away. And here we are
                            here to provide you with a way to wrap up your
                            incompleteness and make sure to experience a
                            successful ending to the challenge that you have
                            taken. We are confident with our group of young
                            instructors (students from various public
                            universities including BUET and SUST and Medical
                            College) to make every course enjoyable for you.
                        </p>
                    </div>
                </Col>
                <Col lg="7" xs="12">
                    <Image
                        className="img-fluid"
                        src="https://image.freepik.com/free-vector/colleagues-working-together-project_74855-6308.jpg"
                        alt=""
                        width="600"
                        height="500"
                    />
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;
