import Link from "next/link";
import React from "react";

import SignupForm from "../components/forms/SignupForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Auth | Sign Up",
    description: "Auth | Sign Up",
};

const Signup = () => {
    return (
        <div>
            <Link href="/" className="heading heading--third text-black">
                Fiber
            </Link>
            <h2 className="heading heading--second my-5">
                Create Fiber Account
            </h2>
            <SignupForm />
        </div>
    );
};

export default Signup;
