const WebIcon = ({ width = "40", ...props }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 42 42"
            {...props}
            width={width}
            style={{
                fill: "none",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
            }}
        >
            <path
                d="M21,40.16c5.07,0,9.94-2.02,13.52-5.6c3.59-3.59,5.6-8.45,5.6-13.52s-2.02-9.94-5.6-13.52
	c-3.59-3.59-8.45-5.6-13.52-5.6s-9.94,2.02-13.52,5.6c-3.59,3.59-5.6,8.45-5.6,13.52s2.02,9.94,5.6,13.52
	C11.06,38.15,15.93,40.16,21,40.16z"
            />
            <path d="M1.87,21.04h38.25" />
            <path
                d="M28.36,21.04C28,28.03,25.42,34.73,21,40.16c-4.42-5.43-7-12.13-7.36-19.13C14,14.04,16.58,7.35,21,1.91
	C25.42,7.35,28,14.04,28.36,21.04z"
            />
        </svg>
    );
};

export default WebIcon;
