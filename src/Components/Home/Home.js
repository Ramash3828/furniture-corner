import React from "react";
import "./Home.css";
import heroImage from "../../images/home_indoor.jpg";
import SingleReview from "../SingleReview/SingleReview";
import useReviews from "../../hooks/useReviews";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    return (
        <>
            <main className="heroArea">
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 order-2 order-md-1">
                            <div className="text-area text-md-start pe-md-5">
                                <h2 className="hero-title">
                                    2022 Indoor Collection
                                </h2>
                                <p className="hero-details">
                                    The 2021 collection conjures the spirit of a
                                    contemporary habitat where the interior
                                    decor is also reflected in the outdoor
                                    spaces and embodies an all-encompassing
                                    style.
                                </p>
                                <button className="hero-btn">Live Demo</button>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-md-2">
                            <div className="img-area ">
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
            <div className="product-reviews ">
                <div className="container">
                    <h2 className="mt-3">Customer Reviews</h2>
                    <div className="row">
                        {reviews.slice(3).map((review) => (
                            <SingleReview
                                key={review.id}
                                review={review}
                            ></SingleReview>
                        ))}
                    </div>
                    <button
                        onClick={() => navigate(`/reviews`)}
                        className="review-btn mt-3"
                    >
                        See All Reviews
                    </button>
                </div>
            </div>
        </>
    );
};

export default Home;
