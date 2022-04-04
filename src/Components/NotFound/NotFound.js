import React from "react";
import "./NotFound.css";
import errorImg from "../../images/404-error.jpg";

const NotFound = () => {
    return (
        <div className="container">
            <div className="errorImg">
                <img src={errorImg} alt="ErrorImg" />
            </div>
        </div>
    );
};

export default NotFound;
