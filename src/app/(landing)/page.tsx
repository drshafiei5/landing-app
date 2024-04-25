import { Metadata } from "next";
import React from "react";

import Cta from "./layout/sections/Cta";
import Hero from "./layout/sections/Hero";
import Reviews from "./layout/sections/Reviews";
import Features from "./layout/sections/Features";

export const metadata: Metadata = {
    title: "Fiber Next App",
    description: "Fiber Next App",
};

const HomePage = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Cta />
            <Reviews />
        </div>
    );
};

export default HomePage;
