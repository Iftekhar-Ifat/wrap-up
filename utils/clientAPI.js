import {
    collection,
    getDocs,
    query,
    where,
    updateDoc,
    getDoc,
} from 'firebase/firestore';
import { firebaseDB } from '../lib/firebase';

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

export { getCurrentUser, deleteCourse };
