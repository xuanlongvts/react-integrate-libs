import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <nav>
                <Link href="/">Home</Link>
                <Link href="pagnition">01. Pagination</Link>
            </nav>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}
