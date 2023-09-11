import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.scss";

import FormWizardProvider from "./context/FormWizardProvider.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FormWizardProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </FormWizardProvider>
    </React.StrictMode>
);
