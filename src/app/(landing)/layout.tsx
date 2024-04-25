"use client";

import dynamic from "next/dynamic";
import Footer from "./layout/Footer";
import { redirect, usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

import { useAuth } from "@/src/contexts/auth-context";

const Header = dynamic(() => import("./layout/Header"), { ssr: false });

export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const { authenticated } = useAuth();

    useLayoutEffect(() => {
        if (!authenticated && pathname !== "/") {
            redirect("/auth/signin");
        }
    }, [authenticated, pathname]);

    return (
        <div className="landing">
            <Header />
            <main className="main main--landing">{children}</main>
            <Footer />
        </div>
    );
}
