import { forwardRef } from "react";
import LoaderSvg from "./LoaderSvg";

const LoadingScreen = forwardRef((props, loadingScreen) => {
    return (
        <div className="loading-bg" ref={loadingScreen}>
            <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                <LoaderSvg className="stroke-white" />
            </div>
        </div>
    );
});

export default LoadingScreen;
