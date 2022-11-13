import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

import Routers, { T_Routers } from "../_routers";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <>
            <nav>
                {Routers.map((item: T_Routers, index: number) => {
                    return (
                        <Link
                            href={item.href}
                            className={
                                router.pathname === item.href ? "active" : ""
                            }
                            key={index}
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </nav>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}
