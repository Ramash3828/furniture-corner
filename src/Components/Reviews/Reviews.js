import React from "react";
import useReviews from "../../hooks/useReviews";
import SingleReview from "../SingleReview/SingleReview";
import "./Reviews.css";
const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <main className="container">
            <h2 className="mt-3">Customer Reviews All</h2>
            <div className="row">
                {reviews.map((review) => (
                    <SingleReview
                        key={review.id}
                        review={review}
                    ></SingleReview>
                ))}
            </div>
        </main>
    );
};

export default Reviews;
