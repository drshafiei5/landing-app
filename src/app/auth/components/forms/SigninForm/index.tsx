"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";

import TextField from "@/src/components/TextField";
import { User, AuthActionTypes } from "@/src/types";
import { AuthContext } from "@/src/contexts/auth-context";
import PasswordField from "@/src/components/PasswordField";

const SigninForm = () => {
    const router = useRouter();

    const { handleSubmit, control } = useForm<Omit<User, "name">>();

    const { dispatch } = useContext(AuthContext);

    const onSubmit = (data: Omit<User, "name">) => {
        dispatch({
            type: AuthActionTypes.SIGNIN,
            payload: { ...data, name: "username" },
        });

        router.push("/");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row gy-3 gy-md-4 overflow-hidden">
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
                    <div className="d-grid">
                        <button
                            className="button button--primary"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        Not signed up? Create an account.{" "}
                        <Link href="/auth/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SigninForm;
