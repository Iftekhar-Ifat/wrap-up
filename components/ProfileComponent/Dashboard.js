import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import processStudentData from '../../utils/processStudentData';
import {
    firebaseDB,
    collection,
    onSnapshot,
    query,
    where,
} from '../../lib/firebase';

const Dashboard = () => {
    const [students, setStudents] = useState([]);

    const handleRemove = student => {
        // Handle cancel button click
        console.log(student);
    };

    const handleApprove = student => {
        // Handle accept button click
        console.log(student);
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
                        <th>Course Detail</th>
                        <th>Number</th>
                        <th>Transaction ID</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id} className="align-items-center">
                            <td>{student.name}</td>
                            <td>{student.email}</td>
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
                                        </ul>
                                    )
                                )}
                            </td>
                            <td>{student.number}</td>
                            <td>{student.transactionId}</td>
                            <td>
                                {student.status === 'Completed' ? (
                                    <Button
                                        variant="success"
                                        disabled
                                        className="m-1"
                                        onClick={() => handleRemove(student)}
                                    >
                                        Completed
                                    </Button>
                                ) : (
                                    <>
                                        <Button
                                            variant="danger"
                                            className="m-1"
                                            onClick={() =>
                                                handleRemove(student)
                                            }
                                        >
                                            Remove
                                        </Button>
                                        <Button
                                            className="m-1"
                                            variant="success"
                                            onClick={() =>
                                                handleApprove(student)
                                            }
                                        >
                                            Approve
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
