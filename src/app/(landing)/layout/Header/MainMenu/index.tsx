import React from "react";
import UnderlineLink from "@/src/components/UnderlineLink";
import { nav } from "@/src/data/nav";

const MainMenu = () => {
    return (
        <ul className="navbar-nav">
            {nav.map((item) => (
                <li className="nav-item" key={item.id}>
                    <UnderlineLink
                        className="nav-link"
                        href={item.href}
                        varient="dark"
                    >
                        {item.label}
                    </UnderlineLink>
                </li>
            ))}
        </ul>
    );
};

export default MainMenu;
