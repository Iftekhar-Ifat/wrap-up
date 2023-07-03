import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getAllStudents } from '../../utils/clientAPI';
import processStudentData from '../../utils/processStudentData';

const Dashboard = () => {
    const [students, setStudents] = useState([]);

    const handleCancel = id => {
        // Handle cancel button click
        console.log(`Cancel clicked for student with id ${id}`);
    };

    const handleAccept = id => {
        // Handle accept button click
        console.log(`Accept clicked for student with id ${id}`);
    };

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const result = await getAllStudents();
                const allStudnetsArray = await processStudentData(result);
                setStudents(allStudnetsArray);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchStudents();
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
                                <Button
                                    variant="danger"
                                    onClick={() => handleCancel(student.id)}
                                >
                                    Cancel
                                </Button>{' '}
                                <Button
                                    variant="success"
                                    onClick={() => handleAccept(student.id)}
                                >
                                    Accept
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default Dashboard;
