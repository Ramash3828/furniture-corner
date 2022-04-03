import React from "react";
import "./Footer.css";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row align-items-center ">
                    <div className="col-md-6 ">
                        <div className="text-white my-3 text-md-start">
                            &copy; Copy Rights 2022
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                        <div className="address my-3 text-md-start">
                            <p>
                                <PhoneIcon></PhoneIcon>
                                <span>+880-1777-777777</span>
                            </p>
                            <p>
                                <MailIcon></MailIcon>
                                <span>furniture07@gmail.com</span>
                            </p>
                            <p>
                                <PlaceIcon></PlaceIcon>
                                <span>Dhanmondi, Dhaka, 1207</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
