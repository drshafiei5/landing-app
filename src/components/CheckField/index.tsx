import React from "react";

interface CheckFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
}


const CheckField = ({ id, children, ...rest }: CheckFieldProps) => {
    return (
        <div className="form-check">
            <input
                autoComplete="off"
                className="form-check-input"
                type="checkbox"
                name={id}
                id={id}
                {...rest}
            />
            <label
                className="form-check-label text-secondary"
                htmlFor={id}
            >
                {children}
            </label>
        </div>
    );
};

export default CheckField;
