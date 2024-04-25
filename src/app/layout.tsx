"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import Aos from "aos";

import "@/public/scss/main.scss";
import { AuthProvider } from "../contexts/auth-context";

if (typeof window !== "undefined") {
    import("bootstrap");
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    useEffect(() => {
        Aos.init({
            duration: 1200,
            once: true,
        });
    }, []);

    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>{children}</AuthProvider>
            </body>
        </html>
    );
}
