import 'aos/dist/aos.css';
import type { AppProps } from 'next/app';
import Layout from '../Layout/Layout';
import '../styles/sass/main.scss';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
export default MyApp;
