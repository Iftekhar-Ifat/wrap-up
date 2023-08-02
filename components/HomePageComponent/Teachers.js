import React from 'react';
import styles from '../../styles/HomePage/Service.module.css';
import Image from 'next/image';
const Teachers = props => {
    const { name, fb, img, dept, institute } = props.teach;

    return (
        <div className="col-lg-6 col-sm-12">
            <div className={`${styles.teacher_card} d-flex py-4`}>
                <div className="d-flex justify-content-center">
                    <Image
                        className="m-1"
                        src={img}
                        style={{ borderRadius: '100px' }}
                        alt="teacher-img"
                        width="210"
                        height="210"
                    />
                </div>
                <div className="p-3">
                    <p className="fs-3 fw-bold">{name}</p>
                    <p className="mb-0">{dept}</p>
                    <p>{institute}</p>
                    <a
                        className={`${styles.prof_btn}`}
                        href={fb}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Profile
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
