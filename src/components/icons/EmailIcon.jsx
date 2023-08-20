const EmailIcon = ({ width = "40", ...props }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 30 28.79"
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
                d="M26.74,1.13H3.26c-0.57,0-1.11,0.27-1.51,0.74C1.35,2.35,1.13,3,1.13,3.67v21.6c0,0.67,0.22,1.32,0.63,1.8
		c0.4,0.48,0.94,0.74,1.51,0.74h23.48c0.57,0,1.11-0.27,1.51-0.74c0.4-0.48,0.63-1.12,0.63-1.8V3.67c0-0.67-0.22-1.32-0.63-1.8
		C27.85,1.4,27.31,1.13,26.74,1.13z"
            />
            <path d="M1.13,4.31l12.51,8.95c0.38,0.27,0.87,0.41,1.37,0.41s0.98-0.14,1.37-0.41l12.51-8.95" />
        </svg>
    );
};

export default EmailIcon;
