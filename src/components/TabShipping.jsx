const TabShipping = ({ tab }) => {
    return (
        <div
            className={`absolute top-0 transition-all duration-200 ease-in-out ${
                tab === 2 ? "visible opacity-100" : "invisible opacity-0"
            }`}
        >
            Tab 2
        </div>
    );
};

export default TabShipping;
