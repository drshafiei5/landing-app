"use client";

import React from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import signup from "@/public/assets/images/Sign Up Image.png";

const AuthSlider = () => {
    return (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
            <Swiper
                modules={[Pagination]}
                className="w-75 h-auto"
                pagination={{
                    clickable: true,
                }}
            >
                {Array.from(Array(4).keys()).map((slide) => (
                    <SwiperSlide key={slide}>
                        <Image
                            src={signup}
                            sizes="100vw"
                            style={{
                                height: "auto",
                                width: "100%",
                            }}
                            alt={"signup"}
                        />
                        <div className="my-3 text-white">
                            <h2 className="text-center heading heading--second">
                                Unparalleled Templeates
                            </h2>
                            <p className="text-center heading heading--third fw-light mb-5">
                                Crafted by a team of professional designers, our{" "}
                                <br />
                                templates are eunparalleled in the market
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AuthSlider;
