import React from 'react'
import { Link } from "react-router-dom";
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (


        <footer className="text-center text-lg-start bg-light text-muted">

            {/* <section
                className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom"
            >

                <div className="icon-links">
                    <span><FontAwesomeIcon icon={faGithubSquare} size="3x" /></span>
                    <span><FontAwesomeIcon icon={faLinkedin} size="3x" /></span>
                </div>

                <div className="me-5 d-none d-lg-block">

                </div>

                <div>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    >
                        <FontAwesomeIcon icon={faGithubSquare} size="lg" />
                    </a>
                </div>

            </section> */}



            <section className="footer-main">
                <div className="container text-center text-md-start mt-3">

                    <div className="row mt-2">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">

                            <h6 className="text-uppercase fw-bold mb-2">
                                Links
                            </h6>
                            <Link to="/about" className="button-github"><FontAwesomeIcon icon={faGithubSquare} size="3x" /></Link>
                            {/* <span><FontAwesomeIcon icon={faGithubSquare} size="3x" /></span> */}
                            <p>

                            <Link to="/about" className="button-github"><FontAwesomeIcon icon={faLinkedin} size="3x" /></Link>
                            </p>

                        </div>

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-2">

                            <h6 className="text-uppercase fw-bold mb-2">
                                About me
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>




                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-2">

                            <h6 className="text-uppercase fw-bold mb-2">
                                Some of my projects
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Fox in the Box</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">YelpCamp</a>
                            </p>

                        </div>

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                            <h6 className="text-uppercase fw-bold mb-2">
                                Contact
                            </h6>
                            <p>
                                laurijarvinen@hotmail.com
                            </p>
                            <p>+358405346405</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="text-center p-2">
                © 2021 Copyright: Portfolio App
            </div>
        </footer>


    )
}

export default Footer;


