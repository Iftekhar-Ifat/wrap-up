import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import {
    collection,
    firebaseDB,
    onSnapshot,
    query,
    where,
} from '../../lib/firebase';
import { acceptEnrollment, removeEnrollment } from '../../utils/clientAPI';
import processStudentData from '../../utils/processStudentData';

const Dashboard = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleRemove = async student => {
        setIsLoading(true);
        // Handle cancel button click
        const userEmail = student.email;
        const courseKey = student.course_detail[0].course_key;
        await removeEnrollment(userEmail, courseKey);

        setIsLoading(false);
    };

    const handleApprove = async student => {
        setIsLoading(true);
        const userEmail = student.email;
        const courseKey = student.course_detail[0].course_key;
        await acceptEnrollment(userEmail, courseKey);

        setIsLoading(false);
    };
    useEffect(() => {
        const q = query(
            collection(firebaseDB, 'users'),
            where('role', '==', 'student')
        );
        const unsubscribe = onSnapshot(q, async querySnapshot => {
            const users = querySnapshot.docs.map(doc => doc.data());

            const allStudnetsArray = await processStudentData(users);
            setStudents(allStudnetsArray);
        });

        return () => unsubscribe(); // Clean up the listener when the component unmounts
    }, []);

    return (
        <>
            <Table responsive className="mt-5">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Course Detail</th>
                        <th>Payment Number</th>
                        <th>Transaction ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id} className="align-items-center">
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.phone}</td>
                            <td>
                                {student.course_detail.map(
                                    (eachCourse, index) => (
                                        <ul
                                            key={index}
                                            className="border rounded"
                                        >
                                            <li>
                                                <b>Course Type: </b>
                                                {eachCourse.course_type}
                                            </li>
                                            <li>
                                                <b>Chapter Name: </b>
                                                {eachCourse.chapter_name}
                                            </li>
                                            <li>
                                                <b>Price: </b>
                                                {eachCourse.price}
                                            </li>
                                            <li>
                                                <b>Total Class: </b>
                                                {eachCourse.total_class}
                                            </li>
                                            <li>
                                                <b>Slot : </b>
                                                {eachCourse.slot}
                                            </li>
                                            <li>
                                                <b>Version: </b>
                                                {eachCourse.version}
                                            </li>
                                        </ul>
                                    )
                                )}
                            </td>
                            <td>{student.number}</td>
                            <td>{student.transactionId}</td>
                            <td>
                                {student.status === 'Completed' ? (
                                    <>
                                        <Button
                                            variant="success"
                                            disabled
                                            className="m-1"
                                            onClick={() =>
                                                handleRemove(student)
                                            }
                                        >
                                            Completed
                                        </Button>
                                        <Button
                                            variant="danger"
                                            className="m-1"
                                            disabled={isLoading}
                                            onClick={() =>
                                                handleRemove(student)
                                            }
                                        >
                                            {isLoading ? 'Loading…' : 'Remove'}
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            variant="danger"
                                            className="m-1"
                                            disabled={isLoading}
                                            onClick={() =>
                                                handleRemove(student)
                                            }
                                        >
                                            {isLoading ? 'Loading…' : 'Remove'}
                                        </Button>
                                        <Button
                                            className="m-1"
                                            variant="success"
                                            disabled={isLoading}
                                            onClick={() =>
                                                handleApprove(student)
                                            }
                                        >
                                            {isLoading ? 'Loading…' : 'Approve'}
                                        </Button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default Dashboard;
