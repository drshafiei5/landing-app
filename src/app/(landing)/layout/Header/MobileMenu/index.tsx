"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { nav } from "@/src/data/nav";
import { useAuth } from "@/src/contexts/auth-context";

const MobileMenu = () => {
    const router = useRouter();
    const { authenticated, user, logout } = useAuth();
    const { email = "" } = user || {};

    const onLinkCliked = (href: string) => {
        router.push(href);
    };

    return (
        <ul className="list-group list-group-flush">
            {nav.map((item) => (
                <li
                    key={item.id}
                    role="button"
                    className="list-group-item"
                    data-bs-dismiss="offcanvas"
                >
                    <p
                        className="text-black"
                        onClick={() => onLinkCliked(item.href)}
                    >
                        {item.label}
                    </p>
                </li>
            ))}
            {!authenticated ? (
                <>
                    <li
                        role="button"
                        className="list-group-item"
                        data-bs-dismiss="offcanvas"
                    >
                        <p
                            className="text-black"
                            onClick={() => onLinkCliked("/auth/signin")}
                        >
                            Signin
                        </p>
                    </li>
                    <li
                        role="button"
                        className="list-group-item"
                        data-bs-dismiss="offcanvas"
                    >
                        <p
                            className="text-black"
                            onClick={() => onLinkCliked("/auth/signup")}
                        >
                            Signup
                        </p>
                    </li>
                </>
            ) : (
                <>
                    <li
                        role="button"
                        className="list-group-item"
                        data-bs-dismiss="offcanvas"
                    >
                        <p
                            className="text-black"
                            onClick={() => onLinkCliked("/profile")}
                        >
                            Profile ({email})
                        </p>
                    </li>
                    <li
                        role="button"
                        className="list-group-item"
                        data-bs-dismiss="offcanvas"
                    >
                        <span
                            className="text-black"
                            style={{ cursor: "pointer" }}
                            onClick={logout}
                        >
                            Logout
                        </span>
                    </li>
                </>
            )}
        </ul>
    );
};

export default MobileMenu;


