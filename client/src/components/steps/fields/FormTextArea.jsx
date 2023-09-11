import { forwardRef } from "react";

const FormTextArea = forwardRef(
    ({ label, id, placeholder, name, required, onChange, children }, ref) => {
        return (
            <div className="my-2">
                <label htmlFor={id} className="mb-1 block">
                    {label}
                    {required && (
                        <span className="ml-1 text-secondary-color">*</span>
                    )}
                </label>
                <textarea
                    id={id}
                    rows="5"
                    placeholder={placeholder}
                    name={name}
                    onChange={onChange}
                    ref={ref}
                    className="w-full rounded border border-main-color p-2 text-gray-500 focus:border-transparent focus:outline-offset-0 focus:outline-secondary-color focus:ring-0"
                ></textarea>

                {children}
            </div>
        );
    }
);

export default FormTextArea;
