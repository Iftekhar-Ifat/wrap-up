import { collection, getDocs, query, where } from 'firebase/firestore';
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

export { getCurrentUser };
