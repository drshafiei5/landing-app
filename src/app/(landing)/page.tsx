import { Metadata } from "next";
import React from "react";
import Hero from "./layout/sections/Hero";
import Features from "./layout/sections/Features";
import Cta from "./layout/sections/Cta";
import Reviews from "./layout/sections/Reviews";

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
