import React from "react";
import Image from "next/image";

import time from "@/public/assets/images/time.svg";
import code from "@/public/assets/images/code.svg";
import allSizes from "@/public/assets/images/allSizes.svg";

const Features = () => {
    return (
        <section className="section section--features">
            <div className="container">
                <h4 className="section--features__sub-heading">Why Fiber?</h4>
                <h2 className="section--features__heading heading heading--second">
                    A good portfolio means good <br />
                    employability.
                </h2>
                <div className="section--features__items">
                    <div className="section-feature-item">
                        <Image
                            src={time}
                            alt="clock-time"
                            className="section-feature-item__img"
                        />
                        <h3 className="section-feature-item__heading heading heading--third">
                            Build in minutes
                        </h3>
                        <p className="section-feature-item__description">
                            With a selection of premade templates, you can build
                            out a portfolio in less than 10 minutes.
                        </p>
                    </div>
                    <div className="section-feature-item">
                        <Image
                            src={code}
                            alt="code"
                            className="section-feature-item__img"
                        />
                        <h3 className="section-feature-item__heading heading heading--third">
                            Add custom CSS
                        </h3>
                        <p className="section-feature-item__description">
                            Customize your personal portfolio even more with the
                            ability to add your own custom CSS styles.
                        </p>
                    </div>
                    <div className="section-feature-item">
                        <Image
                            src={allSizes}
                            alt="code"
                            className="section-feature-item__img"
                        />
                        <h3 className="section-feature-item__heading heading heading--third">
                            Responsive
                        </h3>
                        <p className="section-feature-item__description">
                            All Fiber templates are fully responsive to ensure
                            the experience is seamless across all devices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
