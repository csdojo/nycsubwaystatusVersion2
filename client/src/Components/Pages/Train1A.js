import React, { Component } from "react";
import "./descriptionstyle.css";

const Train1A = (props) => {

  const lineColor = (linename) => {

    switch (linename) {
      case "1":
      case "2":
      case "3":
        return "red"
        break;
      case "4":
      case "5":
      case "6":
        return "#20a54d"
        break;
      case "7":
        return "#ba34ad"
        break;
      case "A":
      case "C":
      case "E":
        return "#2850ba"
        break;
      case "B":
      case "D":
      case "F":
      case "M":
        return "#ff6602"
        break;
      case "G":
        return "#7fd353"
        break;
      case "J":
      case "Z":
        return "#b19264"
        break;
      case "L":
        return "#868789"
        break;
      case "N":
      case "Q":
      case "R":
      case "W":
        return "#fecb00"
        break;
      case "S":
        return "#808183"
        break;
      case "SIR":
        return "#333399"
        break;

      default:
        return "red"
    }
  }



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
            <div className="circle1" style={{ background: lineColor(props.lineName) }}>
              {props.lineName}
            </div>
          </div>
          <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
            <div className="row top-buffer">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 view">
                <h1>Is the {props.lineName} train running?</h1>
                <p>Current Status: {props.reasonName}</p>
                <img className="statusImg" src={props.statusImgsrc} alt="" />
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div className="row descriptionRow">

          <div className="container">

            {props.longDescription}

          </div>
        </div>
    </div>
  );
}



export default Train1A;


