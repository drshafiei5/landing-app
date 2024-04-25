import Link, { LinkProps } from "next/link";
import React from "react";

interface UnderlineLinkProps extends LinkProps {
    children: React.ReactNode;
    className?: string | undefined;
    varient?: "primary" | "dark" | undefined;
}

const UnderlineLink = ({
    href = "#",
    children,
    className = "",
    varient = "primary",
    ...rest
}: UnderlineLinkProps) => {
    return (
        <Link
            href={href}
            className={`underline-link underline-link--${varient} ${className}`}
            {...rest}
        >
            {children}
        </Link>
    );
};

export default UnderlineLink;
