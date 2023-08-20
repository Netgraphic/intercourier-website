import { forwardRef } from "react";

const FormInputRadio = forwardRef(
    ({ id, icon, label, name, value, onChange }, ref) => {
        return (
            <div className="w-full">
                <input
                    id={id}
                    className="peer hidden"
                    type="radio"
                    ref={ref}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <label
                    htmlFor={id}
                    className="my-3 flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-secondary-color p-5 text-lg text-secondary-color peer-checked:bg-main-color peer-checked:text-white peer-checked:[&>div>svg]:stroke-white"
                >
                    <div>
                        {icon}
                        {label}
                    </div>
                </label>
            </div>
        );
    }
);

export default FormInputRadio;
