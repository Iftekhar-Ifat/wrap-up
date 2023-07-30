import React, { useEffect, useState } from 'react';
import Teachers from '../../components/HomePageComponent/Teachers';
import style from '../../styles/AboutUs/AboutUs.module.css';

const AboutUs = () => {
    const [teacher, setTeacher] = useState([]);
    useEffect(() => {
        fetch('/data/teachers.json')
            .then(res => res.json())
            .then(data => setTeacher(data));
    }, []);
    return (
        <div className="container about-container">
            <div className="m-3 my-5">
                <h1 className="text-center fw-bold">About Us</h1>
                <p className={style.about_wrapper}>
                    Our program is first ever in Bangladesh, to provide you
                    short term live courses that are designed to cover only one
                    chapter in one course. It is quite typical for students of
                    SSC or HSC to experience setbacks or academic challenges and
                    start to lag in regular studies which often lead to feelings
                    of distress and demotivation among many of them. If you are
                    already in such a situation, what step do you want to take?
                    We are pretty sure that you wouldn&apos;t want to leave
                    everything as it is and feel down all the time. YEAH, you
                    have to take a challenge to settle all your unfinished work
                    right away. And here we are here to provide you with a way
                    to wrap up your incomplete syllabus and make sure to
                    experience a successful ending to the challenge you have
                    taken. We are confident with our group of young instructors
                    (students from BUET and DMC) to make every course enjoyable
                    for you.
                </p>
            </div>
            <section className="container category-container row mx-auto">
                <h1 className="fw-bold text-center">Organizers</h1>
                {teacher.map(teach => (
                    <Teachers key={teach.id} teach={teach}></Teachers>
                ))}
            </section>
        </div>
    );
};

export default AboutUs;
