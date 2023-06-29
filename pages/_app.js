import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from '../context/AuthProvider';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import Image from 'next/image';
import MessengerIcon from '../public/assets/messenger.png';

function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <NavBar />
            <div className="position-fixed fixed-bottom d-flex justify-content-end">
                <Link href="https://m.me/wrapupeducation">
                    <Image
                        alt="messenger-icon"
                        src={MessengerIcon}
                        width="50"
                    />
                </Link>
            </div>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
