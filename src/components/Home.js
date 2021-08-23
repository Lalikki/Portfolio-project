import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";

const Header = () => {
    return (

        <div className="header-wrapper">
            <Particles
                className="particles-canvas"
                params={{
                    particles: {
                        number: {
                            value: 30,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 6,
                                color: "#f9ab00"
                            }
                        }
                    }

                }
                }
            />
            <div className="main-info">
                <h1>Web development</h1>
                <Typed
                    className="typed-text"
                    strings={["HTML", "CSS", "JavaScript", "React"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link to="/contact" className="btn-main-offer">Contact me</Link>
            </div>
        </div>

    )
}

export default Header


