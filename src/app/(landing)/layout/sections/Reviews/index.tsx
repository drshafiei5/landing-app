"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import reviews from "@/src/data/reviews";
import Link from "next/link";

const Reviews = () => {
    return (
        <section className="section section--reviews">
            <div className="container p-0">
                <Swiper
                    spaceBetween={30}
                    breakpoints={{
                        300: {
                            slidesPerView: 1.5,
                        },
                        1200: {
                            slidesPerView: 2.25,
                        },
                    }}
                >
                    {reviews.map((review) => (
                        <SwiperSlide key={review.id}>
                            <div className="review">
                                <div className="review__bio">
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        className="review__img"
                                        width={50}
                                        height={50}
                                    />
                                    <div className="review__text">
                                        <p className="review__user-name">
                                            {review.name}
                                        </p>
                                        <p className="review__user-revenue">
                                            ${review.revenue}k in revenue
                                        </p>
                                    </div>
                                </div>
                                <p className="review__description">
                                    {review.quote}
                                </p>
                                <div className="review__actions">
                                    <Link
                                        href="#"
                                        className="button button--primary-reverse"
                                    >
                                        View {review.name.split(" ")[0]}’s
                                        Portfolio
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;
