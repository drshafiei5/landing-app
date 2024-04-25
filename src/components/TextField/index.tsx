import React from "react";
import {
    Control,
    Controller,
    ControllerProps,
    FieldValues,
} from "react-hook-form";

export interface TextFieldProps<T extends FieldValues>
    extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    placeholder: string;
    label: string;
    control: Control<T, any>;
    controlerProps?: Partial<ControllerProps> | undefined;
}

const TextField = <T extends FieldValues>({
    id,
    placeholder,
    required,
    label,
    type = "text",
    control,
    controlerProps,
    ...rest
}: TextFieldProps<T>) => {
    return (
        <>
            <label htmlFor={id} className="form-label fw-bold">
                {label}
                {required && <span className="text-danger ms-1">*</span>}
            </label>
            <Controller
                {...controlerProps}
                name={id}
                control={control as Control<FieldValues>}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                }) => {
                    return (
                        <>
                            <input
                                name={id}
                                id={id}
                                type={type}
                                placeholder={placeholder}
                                autoComplete="off"
                                onChange={onChange}
                                value={value || ""}
                                formNoValidate
                                className={`form-control py-3 ${
                                    error?.message!?.length > 0
                                        ? "is-invalid"
                                        : ""
                                }`}
                                {...rest}
                            />
                            {error && (
                                <small className="text-danger">
                                    {error.message}
                                </small>
                            )}
                        </>
                    );
                }}
            />
        </>
    );
};

export default TextField;
