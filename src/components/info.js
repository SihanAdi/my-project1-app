import React from "react"
import adsh from "../images/adsh.JPG"
import linkedin from "../images/linkedin.png"
import Mail from "../images/Mail.png"
import "./info.css";

export default function Info() {
    return (
        <nav className="info-all">
            <img src={adsh} className="adsh-img" />
            <h3>Sihan Adi</h3>
            <h4>Full-Stack Software Engineer</h4>
            <h6>adsh.website</h6>
            <div className="img">
                <div className="img-mail">
                    <img src={Mail} />
                    <h6>Email</h6>
                </div>
                <div className="img-in">
                    <img src={linkedin} />
                    <h6>linkedin</h6>
                </div>
                
            </div>
        </nav>
    )
}
