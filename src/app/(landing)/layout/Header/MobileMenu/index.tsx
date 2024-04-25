"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";

import { nav } from "@/src/data/nav";
import { AuthContext } from "@/src/contexts/auth-context";
import { AuthActionTypes } from "@/src/types";

const MobileMenu = () => {
    const router = useRouter();
    const {
        state: { authenticated, user },
        dispatch,
    } = useContext(AuthContext);
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
                            onClick={() => onLinkCliked("/")}
                        >
                            Dashboard ({email})
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
                            onClick={() =>
                                dispatch({
                                    type: AuthActionTypes.LOGOUT,
                                    payload: null,
                                })
                            }
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
