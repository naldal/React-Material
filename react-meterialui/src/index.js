import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { Router } from "@material-ui/icons";

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
