import React from "react";
import useReviews from "../../useReviews";
import SingleReview from "../SingleReview/SingleReview";
import "./Reviews.css";
const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className="container">
            <h2 className="mt-3">All Reviews</h2>
            <div className="row">
                {reviews.map((review) => (
                    <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>
                ))}
            </div>
        </div>
    );
};

export default Reviews;
