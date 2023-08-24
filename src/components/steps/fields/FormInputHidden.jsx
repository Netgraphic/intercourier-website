import { forwardRef } from "react";

const FormInputHidden = forwardRef(({ name, onChange }, ref) => {
    return <input type="hidden" name={name} ref={ref} onChange={onChange} />;
});

export default FormInputHidden;
