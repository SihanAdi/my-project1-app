import React from "react";
import Twitter from "../images/Twitter Icon.png"
import Facebook from "../images/Facebook Icon.png"
import Instagram from "../images/Instagram Icon.png"
import GitHub from "../images/GitHub Icon.png"
import "./footer.css"

export default function Footer() {
    return (
        <nav className="footer">
            <img src={Twitter} />
            <img src={Facebook} />
            <img src={Instagram} />
            <img src={GitHub} />
        </nav>
    )
}