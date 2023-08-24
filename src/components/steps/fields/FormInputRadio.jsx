import { forwardRef } from "react";

const FormInputRadio = forwardRef(
    ({ id, icon, label, label2, name, value, onClick, onChange }, ref) => {
        return (
            <div className="w-full">
                <input
                    id={id}
                    className="peer hidden"
                    type="radio"
                    ref={ref}
                    name={name}
                    value={value}
                    onClick={onClick}
                    onChange={onChange}
                />
                <label
                    htmlFor={id}
                    className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-secondary-color px-3 py-5 text-lg text-secondary-color peer-checked:bg-main-color peer-checked:text-white peer-checked:[&>div>span>svg]:stroke-white"
                >
                    <div className="text-center">
                        <span className="text-7xl">{icon}</span>
                        <div className={`${label2 ? "text-xs" : "text-lg"}`}>
                            {label}
                        </div>
                        {label2 && <div className="mt-2 text-xs">{label2}</div>}
                    </div>
                </label>
            </div>
        );
    }
);

export default FormInputRadio;
