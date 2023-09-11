import { forwardRef } from "react";

const FormSelect = forwardRef(
    ({ id, label, name, onChange, options, required, children }, ref) => {
        return (
            <div className="mb-2">
                <label className="mb-1 block" htmlFor={id}>
                    {label}
                    {required && (
                        <span className="ml-1 text-secondary-color">*</span>
                    )}
                </label>
                <select
                    id={id}
                    name={name}
                    onChange={onChange}
                    ref={ref}
                    className="w-full rounded border border-main-color bg-white p-2 text-gray-500 focus:border-transparent focus:outline-offset-0 focus:outline-secondary-color focus:ring-0"
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
