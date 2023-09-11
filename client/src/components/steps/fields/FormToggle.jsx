import { forwardRef } from "react";

const FormToggle = forwardRef(({ label, name, onChange }, ref) => {
    return (
        <label className="w-100 relative mb-4 inline-flex cursor-pointer items-center">
            <input
                type="checkbox"
                className="peer sr-only"
                name={name}
                onChange={onChange}
                ref={ref}
            />
            <div className="peer h-7 w-14 rounded-full border-2 border-main-color bg-white after:absolute after:left-[4px] after:top-0.5 after:h-6 after:w-6 after:rounded-full after:border after:border-white after:bg-main-color after:transition-all after:content-[''] peer-checked:bg-main-color peer-checked:after:translate-x-full peer-checked:after:border-main-color peer-checked:after:bg-white" />
            <span className="ml-3">{label}</span>
        </label>
    );
});

export default FormToggle;
