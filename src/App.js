import React from "react";
import About from "./components/about";
import Footer from "./components/footer";
import Info from "./components/info";
import Interest from "./components/intersts";

export default function App() {
    return (
        <div>
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}