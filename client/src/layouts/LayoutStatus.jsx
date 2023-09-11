import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const LayoutStatus = () => {
    useEffect(() => {
        document.body.classList.add("bg-main-color");

        return () => {
            document.body.classList.remove("bg-main-color");
        };
    }, []);

    return (
        <div className="container absolute left-[50%] top-[10%] w-3/4 translate-x-[-50%] rounded-lg bg-white p-10 text-center">
            <Outlet />
        </div>
    );
};

export default LayoutStatus;
