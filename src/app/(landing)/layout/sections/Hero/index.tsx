import React from "react";
import Link from "next/link";
import Image from "next/image";

import Rating from "@/src/components/Rating";
import Checkmark from "@/src/components/Checkmark";
import UnderlineLink from "@/src/components/UnderlineLink";
import hero from "@/public/assets/images/hero-Illustration.png";

const Hero = () => {
    return (
        <section className="section section--hero">
            <div className="container">
                <div
                    className="section--hero__content"
                    data-aos="fade-left"
                    data-aos-delay="100"
                >
                    <div
                        className="col-12 col-md-6"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <div className="mb-2">
                            <Rating rate={4} reviewCount={243} />
                        </div>

                        <h1 className="section--hero__heading heading heading--main">
                            Create your portfolio in minutes.
                        </h1>

                        <p className="section--hero__description">
                            With Fiber, you can setup your own personal
                            portfolio in minutes with dozens of premade,
                            beautiful templates.
                        </p>

                        <div className="section--hero__actions">
                            <Link href="#" className="button button--primary">
                                Start Free Trial
                            </Link>
                            <UnderlineLink href="#">
                                View Examples
                            </UnderlineLink>
                        </div>

                        <div className="section--hero__checkmarks">
                            <Checkmark label="Credit Card Required" />
                            <Checkmark label="10 Free Templates" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <Image
                            priority
                            src={hero}
                            alt="hero"
                            className="section--hero__cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
