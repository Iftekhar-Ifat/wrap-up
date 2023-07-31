import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import Footer from '../components/HomePageComponent/Footer';
import NavBar from '../components/NavBar';
import ProtectedRoute from '../components/ProtectedRoute';
import AuthProvider from '../context/AuthProvider';
import '../styles/globals.css';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { Analytics } from '@vercel/analytics/react';

const publicRoute = ['/', '/about-us', '/courses'];
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <link rel="shortcut icon" href="/logo2.svg" />
            </Head>
            <AuthProvider>
                {publicRoute.includes(router.pathname) ? (
                    <div
                        className="d-flex flex-column justify-content-between"
                        style={{ height: '100vh' }}
                    >
                        <div>
                            <NavBar />
                            <Component {...pageProps} />
                        </div>
                        <Footer />
                    </div>
                ) : (
                    <ProtectedRoute>
                        <div
                            className="d-flex flex-column justify-content-between"
                            style={{ height: '100vh' }}
                        >
                            <div>
                                <NavBar />
                                <Component {...pageProps} />
                            </div>
                            <Footer />
                        </div>
                    </ProtectedRoute>
                )}
            </AuthProvider>
            <DefaultSeo {...SEO} />
            <Analytics />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default MyApp;
