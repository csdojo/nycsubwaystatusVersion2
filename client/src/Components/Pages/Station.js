import React, { Component } from "react";
import "./stationstyle.css";


const Station = (props) => {return (
    <div>

      <div className="container">
        
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <table className="table table-hover">
        <tbody>
            <tr>
                <td>
                {props.whatname}
                </td>
               
            </tr>
        </tbody>

        </table>

        </div></div>

  

    </div>
)}

  
        
    

export default Station;