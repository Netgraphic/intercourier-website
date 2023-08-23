const WebIcon = ({ width = "40", ...props }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 42 31.33"
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
                d="M37.83,1.16H4.17c-0.81,0-1.59,0.32-2.16,0.9s-0.9,1.35-0.9,2.16v22.95c0,0.81,0.32,1.59,0.9,2.16
	c0.57,0.57,1.35,0.9,2.16,0.9h33.66c0.81,0,1.59-0.32,2.16-0.9c0.57-0.57,0.9-1.35,0.9-2.16V4.22c0-0.81-0.32-1.59-0.9-2.16
	C39.42,1.48,38.65,1.16,37.83,1.16z"
            />
            <path d="M1.11,11.87h39.79" />
            <path d="M28.65,22.58h4.59" />
        </svg>
    );
};

export default WebIcon;
