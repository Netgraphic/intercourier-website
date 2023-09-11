const InstagramIcon = ({ width = "40", ...props }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 34.1 32.83"
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
                d="M26.24,8.2c-0.18,0-0.35-0.07-0.47-0.19c-0.12-0.12-0.2-0.28-0.2-0.45c0-0.17,0.07-0.33,0.2-0.45
	c0.12-0.12,0.29-0.19,0.47-0.19"
            />
            <path
                d="M26.24,8.2c0.18,0,0.35-0.07,0.47-0.19c0.12-0.12,0.2-0.28,0.2-0.45c0-0.17-0.07-0.33-0.2-0.45
	c-0.12-0.12-0.29-0.19-0.47-0.19"
            />
            <path
                d="M0.99,7.65C0.99,5.9,1.72,4.23,3,2.99c1.29-1.24,3.03-1.93,4.85-1.93h18.28c0.9,0,1.79,0.17,2.62,0.5
	c0.83,0.33,1.59,0.82,2.22,1.43c0.64,0.61,1.14,1.34,1.49,2.14c0.34,0.8,0.52,1.66,0.52,2.52v17.58c0,1.75-0.72,3.43-2.01,4.66
	c-1.29,1.24-3.03,1.93-4.85,1.93H7.85c-1.82,0-3.56-0.69-4.85-1.93c-1.29-1.24-2.01-2.91-2.01-4.66L0.99,7.65L0.99,7.65z"
            />
            <path
                d="M10.2,16.44c0,0.86,0.18,1.71,0.52,2.5c0.34,0.79,0.84,1.51,1.47,2.12c0.63,0.61,1.38,1.09,2.2,1.42
	c0.82,0.33,1.71,0.5,2.6,0.5c0.89,0,1.78-0.17,2.6-0.5c0.82-0.33,1.57-0.81,2.2-1.42c0.63-0.61,1.13-1.33,1.47-2.12
	c0.34-0.79,0.52-1.64,0.52-2.5c0-1.73-0.72-3.39-1.99-4.62c-1.27-1.23-3-1.91-4.81-1.91s-3.53,0.69-4.81,1.91S10.2,14.71,10.2,16.44
	z"
            />
        </svg>
    );
};

export default InstagramIcon;