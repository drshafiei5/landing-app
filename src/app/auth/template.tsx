import React from "react";
import AuthSlider from "./components/AuthSlider";


const AuthTemplate = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="auth-template">
            <div className="auth-template__card">
                <div className="auth-template__content">
                    <div className="col-lg-6 bg-white h-100">
                        <div className="auth-template__children-wrapper">
                            <div className="w-75">{children}</div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-flex h-100">
                        <AuthSlider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthTemplate;
