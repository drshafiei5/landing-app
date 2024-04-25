import React from "react";
import Link from "next/link";

import SigninForm from "../components/forms/SigninForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auth | Sign In",
    description: "Auth | Sign In",
};

const Signin = () => {

    return (
        <div>
            <Link href="/" className="heading heading--third text-black">
                Fiber
            </Link>
            <h2 className="heading heading--second my-5">Sign In</h2>
            <SigninForm />
        </div>
    );
};

export default Signin;
