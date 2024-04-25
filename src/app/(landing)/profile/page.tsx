"use client";

import React from "react";
import dynamic from "next/dynamic";

const ProfileCard = dynamic(() => import("./components/ProfileCard"), {
    ssr: false,
});

const ProfilePage = () => {
    return  (
        <section className="vh-100 bg-white">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 col-xl-4">
                        <ProfileCard />
                    </div>
                </div>
            </div>
        </section>
    ) 
};

export default ProfilePage;
