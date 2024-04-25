import React from "react";
import Image from "next/image";

import star from "@/public/assets/images/star.svg";

interface RatingProps {
    rate: number;
    reviewCount: number;
}

const Rating = ({ rate, reviewCount }: RatingProps) => {
    return (
        <div className="rating">
            <div className="rating__star">
                {Array.from(Array(rate).keys()).map((num) => (
                    <Image key={num} priority src={star} alt="star" />
                ))}
            </div>
            <p className="rating__txt">
                Rated {rate}/5 ({reviewCount} reviews)
            </p>
        </div>
    );
};

export default Rating;
