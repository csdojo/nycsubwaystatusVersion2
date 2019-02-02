import React from "react";
import { Link } from 'react-router-dom';
import "./navstyle.css";

const Nav = () => (
    <div >
        <ul className="nav nav-pills nav-justified">

            <div className="container">
                <a className="navbar-brand" href="#">
                    <Link to="/"
                        className={window.location.pathname === "/" ? "nav-link " : "nav-link"}>NYC Subway Status
                        
                    </Link>
                </a>

                <a className="navbar-brand" href="#">
                    <Link to="/map"
                        className={window.location.pathname === "/map" ? "nav-link " : "nav-link"}>
                        <img className="logo img-fluid" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png" alt="" />
                    </Link>
                </a>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 allTrains">

                    <ul className="nav">
                        <li className=" train1">
                            <Link to="/Train1"
                                className={(window.location.pathname === "/Train1") ? "nav-link active" : "nav-link"}>1</Link>
                        </li>
                        <li className=" train1">
                            <Link to="/Train2"
                                className={(window.location.pathname === "/Train2") ? "nav-link active" : "nav-link"}>2</Link>
                        </li>
                        <li className=" train1">
                            <Link to="/Train3"
                                className={(window.location.pathname === "/Train3") ? "nav-link active" : "nav-link"}>3</Link>
                        </li>
                        <li className=" train4">
                            <Link to="/Train4"
                                className={(window.location.pathname === "/Train4") ? "nav-link active" : "nav-link"}>4</Link>
                        </li>
                        <li className=" train4">
                            <Link to="/Train5"
                                className={(window.location.pathname === "/Train5") ? "nav-link active" : "nav-link"}>5</Link>
                        </li>
                        <li className=" train4">
                            <Link to="/Train6"
                                className={(window.location.pathname === "/Train6") ? "nav-link active" : "nav-link"}>6</Link>
                        </li>
                        <li className=" train7">
                            <Link to="/Train7"
                                className={(window.location.pathname === "/Train7") ? "nav-link active" : "nav-link"}>7</Link>
                        </li>
                        <li className=" trainA">
                            <Link to="/TrainA"
                                className={(window.location.pathname === "/TrainA") ? "nav-link active" : "nav-link"}>A</Link>
                        </li>

                        <li className=" trainA">
                            <Link to="/TrainC"
                                className={(window.location.pathname === "/TrainC") ? "nav-link active" : "nav-link"}>C</Link>
                        </li>

                        <li className=" trainA">
                            <Link to="/TrainE"
                                className={(window.location.pathname === "/TrainE") ? "nav-link active" : "nav-link"}>E</Link>
                        </li>
                        <li className=" trainB">
                            <Link to="/TrainB"
                                className={(window.location.pathname === "/TrainB") ? "nav-link active" : "nav-link"}>B</Link>
                        </li>
                        <li className=" trainB">
                            <Link to="/TrainD"
                                className={(window.location.pathname === "/TrainD") ? "nav-link active" : "nav-link"}>D</Link>
                        </li>
                        <li className=" trainB">
                            <Link to="/TrainF"
                                className={(window.location.pathname === "/TrainF") ? "nav-link active" : "nav-link"}>F</Link>
                        </li>
                        <li className=" trainB">
                            <Link to="/TrainM"
                                className={(window.location.pathname === "/TrainM") ? "nav-link active" : "nav-link"}>M</Link>
                        </li>
                        <li className=" trainG">
                            <Link to="/TrainG"
                                className={(window.location.pathname === "/TrainG") ? "nav-link active" : "nav-link"}>G</Link>
                        </li>
                        <li className=" trainJ">
                            <Link to="/TrainJ"
                                className={(window.location.pathname === "/TrainJ") ? "nav-link active" : "nav-link"}>J</Link>
                        </li>
                        <li className=" trainJ">
                            <Link to="/TrainZ"
                                className={(window.location.pathname === "/TrainZ") ? "nav-link active" : "nav-link"}>Z</Link>
                        </li>
                        <li className=" trainL">
                            <Link to="/TrainL"
                                className={(window.location.pathname === "/TrainL") ? "nav-link active" : "nav-link"}>L</Link>
                        </li>
                        <li className=" trainN">
                            <Link to="/TrainN"
                                className={(window.location.pathname === "/TrainN") ? "nav-link active" : "nav-link"}>N</Link>
                        </li>
                        <li className=" trainN">
                            <Link to="/TrainQ"
                                className={(window.location.pathname === "/TrainQ") ? "nav-link active" : "nav-link"}>Q</Link>
                        </li>
                        <li className=" trainN">
                            <Link to="/TrainR"
                                className={(window.location.pathname === "/TrainR") ? "nav-link active" : "nav-link"}>R</Link>
                        </li>
                        <li className=" trainN">
                            <Link to="/TrainW"
                                className={(window.location.pathname === "/TrainW") ? "nav-link active" : "nav-link"}>W</Link>
                        </li>
                        <li className="trainS">
                            <Link to="/TrainS"
                                className={(window.location.pathname === "/TrainS") ? "nav-link active" : "nav-link"}>S</Link>
                        </li>
                        <li className="trainSIR">
                            <Link to="/TrainSIR"
                                className={(window.location.pathname === "/TrainSIR") ? "nav-link active" : "nav-link"}>SIR</Link>
                        </li>


                    </ul>
                </div>



            </div>
        </ul>
    </div >
);

export default Nav;

