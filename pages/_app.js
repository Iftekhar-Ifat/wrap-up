import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from '../context/AuthProvider';
import NavBar from '../components/NavBar';
import Footer from '../components/HomePageComponent/Footer';
import { useRouter } from 'next/router';
import ProtectedRoute from '../components/ProtectedRoute';

const publicRoute = ['/', '/about-us', '/courses'];

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <AuthProvider>
            {publicRoute.includes(router.pathname) ? (
                <>
                    <NavBar />
                    <Component {...pageProps} />
                    <Footer />
                </>
            ) : (
                <ProtectedRoute>
                    <NavBar />
                    <Component {...pageProps} />
                    <Footer />
                </ProtectedRoute>
            )}
        </AuthProvider>
    );
}

export default MyApp;
