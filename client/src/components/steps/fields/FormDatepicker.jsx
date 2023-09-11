import { forwardRef, useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

import es from "date-fns/locale/es";

import "react-datepicker/dist/react-datepicker.min.css";

registerLocale("es", es);

const FormDatepicker = forwardRef(({ name, setValues }, ref) => {
    const minCustomDeliveryDate = new Date();
    minCustomDeliveryDate.setDate(minCustomDeliveryDate.getDate() + 2);

    const [date, setDate] = useState(() => {
        if (localStorage.getItem("deliveryDate") !== null) {
            let date = localStorage.getItem("deliveryDate");
            date = new Date(date);
            date.setDate(date.getDate());
            return date;
        }

        return minCustomDeliveryDate;
    });

    useEffect(() => {
        localStorage.setItem("deliveryDate", date);
        setValues("deliveryDate", date);
    }, [date]);

    const InputDate = forwardRef(({ value, name, onClick }, ref) => (
        <button
            type="button"
            onClick={onClick}
            name={name}
            ref={ref}
            className="w-full rounded border border-main-color p-2 text-left text-gray-500 focus:outline-secondary-color"
        >
            {value}
            <FontAwesomeIcon
                icon={faCalendarDay}
                className="float-right text-2xl text-secondary-color"
            />
        </button>
    ));

    return (
        <DatePicker
            locale="es"
            dateFormat="dd/MM/yyyy"
            customInput={<InputDate />}
            selected={date}
            name={name}
            ref={ref}
            onChange={(date) => {
                setDate(date);
                setValues("deliveryDate", date);
            }}
            dayClassName={(date) =>
                date.getDay() % 6 === 0 && "text-secondary-color"
            }
            withPortal
            minDate={minCustomDeliveryDate}
        />
    );
});

export default FormDatepicker;
