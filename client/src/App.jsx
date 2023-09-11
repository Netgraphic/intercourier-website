import { Route, Routes } from "react-router-dom";

import LayoutStatus from "./layouts/LayoutStatus";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import PendingPayment from "./routes/PendingPayment";
import ErrorPayment from "./routes/ErrorPayment";
import SuccessPayment from "./routes/SuccessPayment";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/" element={<LayoutStatus />}>
                <Route path="*" element={<NotFound />} />
                <Route path="/pending-payment" element={<PendingPayment />} />
                <Route path="/success-payment" element={<SuccessPayment />} />
                <Route path="/error-payment" element={<ErrorPayment />} />
            </Route>
        </Routes>
    );
};

export default App;
