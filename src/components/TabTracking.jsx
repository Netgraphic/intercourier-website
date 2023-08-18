import { forwardRef } from "react";
import SearchIcon from "./icons/SearchIcon";

const TabTracking = forwardRef(({ tab }, tabContainer1) => {
    return (
        <div
            className={`absolute top-0 w-full px-5 transition-all duration-200 ease-in-out ${
                tab === 1 ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
            <form>
                <div
                    ref={tabContainer1}
                    className="relative -top-8 flex w-full justify-between rounded-xl border-4 border-main-color bg-white p-2 text-gray-500"
                >
                    <input
                        type="text"
                        placeholder="Ingrese número de envío..."
                        className="w-4/5 px-3 outline-none"
                    />
                    <button
                        type="submit"
                        className="inline-block h-[42px] w-[55px] rounded-xl bg-main-color p-2 text-center"
                    >
                        <SearchIcon />
                    </button>
                </div>
            </form>
        </div>
    );
});

export default TabTracking;
