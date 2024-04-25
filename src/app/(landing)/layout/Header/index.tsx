"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";

import MainMenu from "./MainMenu";
import MobileMenu from "./MobileMenu";
import { AuthActionTypes } from "@/src/types";
import { AuthContext } from "@/src/contexts/auth-context";
import Hamburger from "@/public/assets/images/Hamburger Menu.svg";

const Header = () => {
    const {
        state: { authenticated, user },
        dispatch,
    } = useContext(AuthContext);
    const { email = "" } = user || {};

    return (
        <header className="header header--landing">
            <div className="header--landing__container">
                <div className="header--landing__content">
                    <div className="header--landing__logo">
                        <Link href="/">Fiber</Link>
                    </div>

                    <nav className="header--landing__navbar">
                        <MainMenu />
                    </nav>

                    <div className="header--landing__actions">
                        <div className="header--landing__auth">
                            {!authenticated ? (
                                <>
                                    <Link
                                        href="/auth/signin"
                                        className="button"
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="/auth/signup"
                                        className="button button--primary"
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            ) : (
                                <div className="dropdown">
                                    <Link
                                        className="btn btn-secondary dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {email}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Action
                                            </Link>
                                        </li>
                                        <li>
                                            <span
                                                className="dropdown-item"
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
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <Image
                                role="button"
                                src={Hamburger}
                                alt="Hamburger"
                                className="header--landing__hamburger-icon"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasMenu"
                                aria-controls="offcanvasMenu"
                            />

                            <div
                                tabIndex={-1}
                                id="offcanvasMenu"
                                className="offcanvas offcanvas-start"
                                aria-labelledby="offcanvasMenuLabel"
                            >
                                <div className="offcanvas-header">
                                    <h5
                                        className="fw-bold"
                                        id="offcanvasMenuLabel"
                                    >
                                        Fiber
                                    </h5>
                                    <button
                                        type="button"
                                        aria-label="Close"
                                        data-bs-dismiss="offcanvas"
                                        className="button button--close"
                                    />
                                </div>
                                <div className="offcanvas-body pt-0">
                                    <MobileMenu />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
