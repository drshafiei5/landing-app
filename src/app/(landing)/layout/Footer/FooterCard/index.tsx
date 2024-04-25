import React, { PropsWithChildren } from "react";

const FooterCard = ({
    title,
    children,
}: PropsWithChildren<{ title: string }>) => {
    return (
        <div className="footer-item">
            <h6>{title}</h6>
            <div className="footer-item__content">
                {children}
            </div>
        </div>
    );
};

export default FooterCard;
