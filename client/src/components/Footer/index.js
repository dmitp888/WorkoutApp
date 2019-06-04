import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Footer() {
    return (
        <div className="jumbotron text-center" id="footer">
            <p>WorkoutApp 2019</p>
        </div>
    );
}

export default Footer;
