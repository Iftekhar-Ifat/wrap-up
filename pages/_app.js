import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import Footer from '../components/HomePageComponent/Footer';
import NavBar from '../components/NavBar';
import ProtectedRoute from '../components/ProtectedRoute';
import AuthProvider from '../context/AuthProvider';
import '../styles/globals.css';

const publicRoute = ['/', '/about-us', '/courses'];
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <QueryClientProvider client={queryClient}>
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
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default MyApp;
