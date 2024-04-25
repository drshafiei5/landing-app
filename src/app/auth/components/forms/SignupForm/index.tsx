"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import { AuthActionTypes, User } from "@/src/types";
import TextField from "@/src/components/TextField";
import CheckField from "@/src/components/CheckField";
import { AuthContext } from "@/src/contexts/auth-context";
import UnderlineLink from "@/src/components/UnderlineLink";
import PasswordField from "@/src/components/PasswordField";

const SignupForm = () => {
    const router = useRouter();
    const { handleSubmit, control } = useForm<User>();

    const { dispatch } = useContext(AuthContext);

    const onSubmit = (data: User) => {
        dispatch({ type: AuthActionTypes.SIGNUP, payload: data });
        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row gy-3 gy-md-4 overflow-hidden">
                <div className="col-12">
                    <TextField
                        id="name"
                        label="Your Name"
                        placeholder="John Doe"
                        control={control}
                    />
                </div>
                <div className="col-12">
                    <TextField
                        type="email"
                        id="email"
                        label="email"
                        placeholder="john@example.com"
                        required
                        control={control}
                        controlerProps={{
                            rules: {
                                required: "Email is required",
                                validate: (value) => {
                                    if (!/\S+@\S+\.\S+/.test(value)) {
                                        return "Email is incorrect";
                                    }
                                },
                            },
                        }}
                    />
                </div>
                <div className="col-12">
                    <PasswordField
                        id="password"
                        label="password"
                        placeholder="At least 8 characters"
                        required
                        control={control}
                        controlerProps={{
                            rules: {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Minimum 8 Characters required",
                                },
                            },
                        }}
                    />
                </div>
                <div className="col-12">
                    <CheckField id="remember_me">
                        By creating an account on Fiber,you agree to the{" "}
                        <UnderlineLink
                            href={"/"}
                            className="d-inline-block d-md-block w-fit"
                        >
                            Terms & Conditional
                        </UnderlineLink>
                    </CheckField>
                </div>
                <div className="col-12">
                    <div className="d-grid">
                        <button
                            className="button button--primary"
                            type="submit"
                        >
                            Create Fiber Account
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        Already Have an Account?{" "}
                        <Link href="/auth/signin">Sign In</Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignupForm;
