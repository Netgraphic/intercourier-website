import { forwardRef } from "react";

const FormInputText = forwardRef(
    ({ label, type, placeholder, name, onChange, required, children }, ref) => {
        return (
            <div className="mb-2">
                <label className="mb-1 block">
                    {label}
                    {required && (
                        <span className="ml-1 text-secondary-color">*</span>
                    )}
                </label>
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                    ref={ref}
                    className="w-full rounded border border-main-color p-2 text-gray-500 focus:border-transparent focus:outline-offset-0 focus:outline-secondary-color focus:ring-0"
                />
                {children}
            </div>
        );
    }
);

export default FormInputText;
