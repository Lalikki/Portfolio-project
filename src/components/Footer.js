import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (


        <footer className="text-center text-lg-start bg-light text-muted">

            <section
                className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
            >

                <div className="me-5 d-none d-lg-block">
                    <span>My links:</span>
                </div>

                <div>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin"></i>
                    </a>

                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i>
                    </a>
                </div>

            </section>



            <section className="">
                <div className="container text-center text-md-start mt-5">

                    <div className="row mt-3">

                        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>About me
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum
                                dolor sit amet, consectetur adipisicing elit.
                            </p>
                        </div>


                        <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mb-4">

                            <h6 className="text-uppercase fw-bold mb-4">
                                Some of my projects
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Fox in the Box</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">YelpCamp</a>
                            </p>

                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
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

            <div className="text-center p-4">
                © 2021 Copyright: Portfolio App
            </div>
        </footer>


    )
}

export default Footer;


