const TabPricing = ({ tab }) => {
    return (
        <div
            className={`absolute top-0 transition-all duration-200 ease-in-out ${
                tab === 3 ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
            Tab 3
        </div>
    );
};

export default TabPricing;
