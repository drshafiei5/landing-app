import React from "react";
import Image from "next/image";
import checkmark from "@/public/assets/images/Checkmark.svg";

interface CheckmarkProps {
    label: string;
}

const Checkmark = ({ label }: CheckmarkProps) => {
    return (
        <div className="checkmark">
            <Image priority src={checkmark} alt="checkmark" />
            <span>{label}</span>
        </div>
    );
};

export default Checkmark;
