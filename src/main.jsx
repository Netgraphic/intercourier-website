import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.scss";
import FormWizardProvider from "./context/FormWizardProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FormWizardProvider>
            <App />
        </FormWizardProvider>
    </React.StrictMode>
);
