import { Rating } from "@mui/material";
import React, { useState } from "react";
import "./SingleReview.css";

const SingleReview = ({ review }) => {
    const { name, picture, discribe } = review;
    const [value, setValue] = useState(2);

    return (
        <div className="col-md-4 p-3">
            <div className="card p-2">
                <img src={picture} alt={name} />
                <div className="info">
                    <h5>
                        Name: <strong>{name}</strong>
                    </h5>
                    <p className="ratings">
                        Ratings:{"  "}
                        {
                            <Rating
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        }
                    </p>
                    <p>
                        <strong>Description:</strong>{" "}
                        {discribe.length < 78
                            ? discribe
                            : discribe.slice(0, 78) + " ..."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;
