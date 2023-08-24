import { forwardRef } from "react";

const FormSelect = forwardRef(
    ({ label, name, onChange, options, required, children }, ref) => {
        return (
            <div className="mb-2">
                <label className="mb-1 block">
                    {label}
                    {required && (
                        <span className="ml-1 text-secondary-color">*</span>
                    )}
                </label>
                <select
                    name={name}
                    onChange={onChange}
                    ref={ref}
                    className="w-full rounded border border-main-color bg-white px-2 py-1 text-gray-500 focus:outline-secondary-color"
                >
                    <option value="">Seleccionar</option>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                {children}
            </div>
        );
    }
);

export default FormSelect;
