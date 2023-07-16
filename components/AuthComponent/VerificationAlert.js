import { sendEmailVerification } from 'firebase/auth';
import Alert from 'react-bootstrap/Alert';
import { useAuth } from '../../context/AuthProvider';

function VerificationAlert() {
    const currentUser = useAuth().currentUser;
    return (
        <Alert variant="danger">
            An Email has been sent to <b>{currentUser.email}</b>. Verify to
            enroll courses.
            <b
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    sendEmailVerification(currentUser);
                    alert('Email Resend. Check your email ✔');
                }}
            >
                {' '}
                Resend Email?
            </b>
        </Alert>
    );
}

export default VerificationAlert;
