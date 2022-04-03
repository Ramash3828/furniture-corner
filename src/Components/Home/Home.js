import React from "react";
import "./Home.css";
import heroImage from "../../images/home_indoor.jpg";

const Home = () => {
    return (
        <main className="heroArea">
            <div className="container ">
                <div className="row">
                    <div className="col-md-6 order-2 order-md-1">
                        <div className="text-area pe-md-5">
                            <h2 className="hero-title">
                                2022 Indoor Collection
                            </h2>
                            <p className="hero-details">
                                The 2021 collection conjures the spirit of a
                                contemporary habitat where the interior decor is
                                also reflected in the outdoor spaces and
                                embodies an all-encompassing style.
                            </p>
                            <button className="hero-btn">Live Demo</button>
                        </div>
                    </div>
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="img-area">
                            <img
                                className="img-fluid"
                                src={heroImage}
                                alt="HeroImage"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
