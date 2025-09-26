import type { AppProps } from 'next/app';
// import '@/styles/globals.css';
// import '../styles/globals.css';
import '@repo/react-ui/dist/react-ui.css';
import '@/styles/globals.css'; // host-specific styles

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
