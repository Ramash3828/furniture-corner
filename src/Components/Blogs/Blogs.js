import React from "react";
import "./Blogs.css";

const Blogs = () => {
    return (
        <div className="blogs-area py-5">
            <div className="container">
                <h2 className="mb-3">Question & Answer</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="blog-text text-start">
                            <p>
                                <strong>What is Context API?</strong>
                            </p>
                            <p>
                                Ans:- Context API is the way to create global
                                variables that can be passed around the
                                component. Context API is an alternative to
                                passing props manually in a component. The
                                Context API is a React structure that enables
                                you to exchange unique data and enable to
                                solving prop-drilling from all levels of your
                                projects. It's can easy to passing data parent
                                component to other siblings component or child
                                components.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-text text-start">
                            <p>
                                <strong>What is Semantic Tag?</strong>
                            </p>
                            <p>
                                Ans:- Semantic HTML elements are those that
                                clearly describe their meaning in a human- and
                                machine-readable way. Elements such as header ,
                                footer and article are all semantic Tags because
                                they clearly describe the purpose of the element
                                and the type of content that is inside them.A
                                semantic element clearly describes its meaning
                                to both the browser and the developer.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="blog-text text-start">
                            <p>
                                <strong>
                                    What is block Elements and Inline Elements?
                                </strong>
                            </p>
                            <p>
                                Ans:- A block-level element always starts on a
                                new line and takes the full width. An inline
                                element does not start on a new line and it only
                                takes as much width. The DIV element is a
                                block-level. If we want to convert block level
                                to Inline level, we can use display property and
                                value inline-block and other hand inline to
                                block then display: block.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
