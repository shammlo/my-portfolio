// import '../styles/globals.css'
import '../styles/sass/main.scss';
import Layout from '../Layout/Layout';
import type { AppProps } from 'next/app';
import 'aos/dist/aos.css';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
export default MyApp;
