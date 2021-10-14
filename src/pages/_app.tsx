// import '../styles/globals.css'
import '../styles/sass/main.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
export default MyApp;
