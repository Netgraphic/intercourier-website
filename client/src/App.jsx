import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";

import LoadingScreen from "./components/LoadingScreen";

import LayoutStatus from "./layouts/LayoutStatus";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import PendingPayment from "./routes/PendingPayment";
import ErrorPayment from "./routes/ErrorPayment";
import SuccessPayment from "./routes/SuccessPayment";

const App = () => {
    const [loadingBg, setLoadingBg] = useState({
        loader: true,
        loading: true,
    });

    const loadingScreen = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setLoadingBg((prev) => ({ ...prev, loading: false }));
            setTimeout(() => {
                loadingScreen.current.classList.add("remove-loading-bg");
                setTimeout(() => {
                    setLoadingBg((prev) => ({ ...prev, loader: false }));
                }, 500);
            }, 1000);
        }, 1500);
    }, []);

    return (
        <main>
            {loadingBg.loader && <LoadingScreen ref={loadingScreen} />}

            {!loadingBg.loading && (
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/" element={<LayoutStatus />}>
                        <Route path="*" element={<NotFound />} />
                        <Route
                            path="/pending-payment"
                            element={<PendingPayment />}
                        />
                        <Route
                            path="/success-payment"
                            element={<SuccessPayment />}
                        />
                        <Route
                            path="/error-payment"
                            element={<ErrorPayment />}
                        />
                    </Route>
                </Routes>
            )}
        </main>
    );
};

export default App;
