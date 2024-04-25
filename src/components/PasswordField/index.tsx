import Image from "next/image";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";

import TextField, { TextFieldProps } from "../TextField";
import hidePasswordSvg from "@/public/assets/images/hide-password.svg";
import showPasswordSvg from "@/public/assets/images/show-password.svg";

const PasswordField = <T extends FieldValues>({
    type,
    ...rest
}: TextFieldProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className="position-relative">
            <TextField {...rest} type={showPassword ? "text" : "password"} />
            <Image
                alt="hide password"
                className="position-absolute"
                onClick={() => setShowPassword(!showPassword)}
                src={showPassword ? hidePasswordSvg : showPasswordSvg}
                style={{ right: "32px", top: "49px", cursor: "pointer" }}
            />
        </div>
    );
};

export default PasswordField;
