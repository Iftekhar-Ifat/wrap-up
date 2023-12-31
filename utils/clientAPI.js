import axios from 'axios';
import {
    collection,
    doc,
    firebaseDB,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
} from '../lib/firebase';

const getCurrentUser = async currentUserEmail => {
    // Create a query to find the document with the matching email
    const q = query(
        collection(firebaseDB, 'users'),
        where('email', '==', currentUserEmail)
    );

    try {
        const querySnapshot = await getDocs(q); // Execute the query
        if (!querySnapshot.empty) {
            // Get the first document from the query result
            const documentSnapshot = querySnapshot.docs[0];
            const userData = documentSnapshot.data();
            return userData;
            // Do something with the user data
        } else {
            console.log('No user found with the provided email.');
        }
    } catch (error) {
        console.error('Error fetching user document:', error);
    }
};

const deleteCourse = async (currentUserEmail, courseKey) => {
    const q = query(
        collection(firebaseDB, 'users'),
        where('email', '==', currentUserEmail)
    );

    try {
        const querySnapshot = await getDocs(q); // Execute the query
        if (!querySnapshot.empty) {
            // Get the first document from the query result
            const userDocRef = querySnapshot.docs[0].ref;
            const userDocSnapshot = await getDoc(userDocRef);
            if (userDocSnapshot.exists()) {
                const enrolledCourses = userDocSnapshot.data().enrolled_courses;
                const updatedCourses = enrolledCourses.filter(
                    course => course.key !== courseKey
                );
                await updateDoc(userDocRef, {
                    enrolled_courses: updatedCourses,
                });
                console.log('Course deleted successfully.');
            } else {
                console.log('User document does not exist.');
            }
        } else {
            console.log('No user found with the provided email.');
        }
    } catch (error) {
        console.error('Error deleting the course:', error);
    }
};

const purchaseCourse = async (
    currentUserEmail,
    courseKey,
    phoneNumber,
    transactionID
) => {
    const q = query(
        collection(firebaseDB, 'users'),
        where('email', '==', currentUserEmail)
    );

    try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userDocRef = querySnapshot.docs[0].ref;
            const userDocSnapshot = await getDoc(userDocRef);
            if (userDocSnapshot.exists()) {
                const enrolledCourses = userDocSnapshot.data().enrolled_courses;
                const updatedCourses = enrolledCourses.map(course => {
                    if (course.key === courseKey) {
                        return {
                            ...course,
                            purchase_info: [
                                {
                                    phoneNumber: phoneNumber,
                                    transactionID: transactionID,
                                },
                            ],
                            status: 'In Progress',
                        };
                    }
                    return course;
                });
                await updateDoc(userDocRef, {
                    enrolled_courses: updatedCourses,
                });
                console.log('Course purchased successfully.');
            } else {
                console.log('User document does not exist.');
            }
        } else {
            console.log('No user found with the provided email.');
        }
    } catch (error) {
        console.error('Error purchasing the course:', error);
    }
};

const getAllStudents = async () => {
    const q = query(
        collection(firebaseDB, 'users'),
        where('role', '==', 'student')
    );

    try {
        const querySnapshot = await getDocs(q);
        const users = querySnapshot.docs.map(doc => doc.data());
        return users;
    } catch (error) {
        console.error('Error getting users by role:', error);
        return [];
    }
};

const removeEnrollment = async (userEmail, courseKey) => {
    const usersCollectionRef = collection(firebaseDB, 'users');
    const q = query(usersCollectionRef, where('email', '==', userEmail));

    try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userDocRef = doc(firebaseDB, 'users', userDoc.id);

            const enrolledCourses = userDoc.data().enrolled_courses;
            const updatedCourses = enrolledCourses.filter(
                course => course.key !== courseKey
            );

            await updateDoc(userDocRef, {
                enrolled_courses: updatedCourses,
            });

            console.log('Enrolled course deleted successfully.');
        } else {
            console.log('No user found with the provided email.');
        }
    } catch (error) {
        console.error('Error deleting enrolled course:', error);
    }
};

const acceptEnrollment = async (userEmail, courseKey) => {
    const usersCollectionRef = collection(firebaseDB, 'users');
    const q = query(usersCollectionRef, where('email', '==', userEmail));

    try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            const userDoc = querySnapshot.docs[0];
            const userDocRef = doc(firebaseDB, 'users', userDoc.id);

            const enrolledCourses = userDoc.data().enrolled_courses;
            const updatedCourses = enrolledCourses.map(course => {
                if (course.key === courseKey) {
                    return {
                        ...course,
                        status: 'Completed',
                    };
                }
                return course;
            });

            await updateDoc(userDocRef, {
                enrolled_courses: updatedCourses,
            });

            console.log('Enrolled course status updated successfully.');
        } else {
            console.log('No user found with the provided email.');
        }
    } catch (error) {
        console.error('Error updating enrolled course status:', error);
    }
};

async function getHSCcourses() {
    const HSCcoursesAPI =
        'https://raw.githubusercontent.com/wrap-up/wrap-up-data/main/hsc_courses.json';
    try {
        const result = await axios.get(HSCcoursesAPI);
        return result.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

async function getSSCcourses() {
    const SSCcoursesAPI =
        'https://raw.githubusercontent.com/wrap-up/wrap-up-data/main/ssc_courses.json';
    try {
        const result = await axios.get(SSCcoursesAPI);
        return result.data;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

export {
    acceptEnrollment,
    deleteCourse,
    getAllStudents,
    getCurrentUser,
    getHSCcourses,
    getSSCcourses,
    purchaseCourse,
    removeEnrollment,
};
