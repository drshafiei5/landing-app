import React from "react";
import Image from "next/image";

import page from "@/public/assets/images/Page Image.png";

const Cta = () => {
    return (
        <section className="section section--cta">
            <div className="container">
                <div className="row">
                    <div className="section--cta__text-box">
                        <h2 className="section--cta__heading heading--second-white">
                            Diversify your portfolio.
                        </h2>
                        <p className="section--cta__description">
                            Create an even more impressive portfolio by creating
                            case studies for your projects. Simply follow our
                            step-by-step guide.
                        </p>
                        <button className="button button--primary-reverse">
                            Start Free Trial
                        </button>
                    </div>
                    <div className="section--cta__image-box">
                        <Image
                            src={page}
                            alt="page-image"
                            className="section--cta__img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
