const PhoneIcon = ({ width = "40", ...props }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 34.29 33.03"
            {...props}
            width={width}
            style={{
                fill: "none",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                margin: "auto",
            }}
        >
            <path
                d="M12.83,30.69c-1.51,0.94-3.32,1.35-5.11,1.16c-1.79-0.19-3.46-0.97-4.72-2.2L1.9,28.61
	c-0.48-0.48-0.76-1.12-0.76-1.79c0-0.67,0.27-1.31,0.76-1.79l4.69-4.47c0.49-0.47,1.15-0.73,1.84-0.73s1.35,0.26,1.84,0.73
	c0.5,0.47,1.16,0.73,1.85,0.73c0.69,0,1.36-0.26,1.85-0.73l7.37-7.09c0.25-0.23,0.44-0.51,0.57-0.82c0.13-0.31,0.2-0.64,0.2-0.97
	c0-0.33-0.07-0.66-0.2-0.97c-0.13-0.31-0.33-0.58-0.57-0.82c-0.48-0.47-0.75-1.11-0.75-1.77c0-0.66,0.27-1.3,0.75-1.77l4.67-4.49
	c0.5-0.47,1.16-0.73,1.85-0.73c0.69,0,1.36,0.26,1.85,0.73l1.08,1.07c1.28,1.22,2.09,2.82,2.28,4.54c0.2,1.72-0.23,3.46-1.2,4.91
	C26.81,19.6,20.34,25.81,12.83,30.69z"
            />
        </svg>
    );
};

export default PhoneIcon;
