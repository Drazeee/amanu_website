import { useState } from "react";
import "./App.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import favicon from "./favicon.ico";
import Header from "./components/Header/Header";

function App() {
    return <HelmetProvider>
        <div>
            <Helmet prioritizeSeoTags>
                <title>Amanu</title>
                <link rel="icon" type="image/x-icon" href={favicon}></link>
            </Helmet>
            <Header />
        </div>
    </HelmetProvider>;
}

export default App;
