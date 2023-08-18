import SearchIcon from "./icons/SearchIcon";

const TabTracking = ({ tab }) => {
    return (
        <div
            className={`absolute left-[50%] top-0 w-full translate-x-[-50%] px-5 transition-all duration-200 ease-in-out ${
                tab === 1 ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
            <form>
                <div className="border-main-color relative -top-8 mx-auto flex w-full justify-between rounded-xl border-4 bg-white p-2 text-gray-500">
                    <input
                        type="text"
                        placeholder="Ingrese número de envío..."
                        className="w-4/5 px-3 outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-main-color inline-block h-[42px] w-[55px] rounded-xl p-2 text-center"
                    >
                        <SearchIcon />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TabTracking;
