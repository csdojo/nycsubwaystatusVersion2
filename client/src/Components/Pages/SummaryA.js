import React, { Component } from 'react';
import xml2js from 'xml2js';
import Summary from './Summary';
import Train from "./Train";
import "./style.css";

var parseString = xml2js.parseString;

class SummaryA extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lineList: [],
      src: '',
      matches: []

    };
    this.corsPolicy = this.corsPolicy.bind(this);
    this.logo = this.logo.bind(this);
  }

  componentDidMount() {
   this.corsPolicy()
}

  corsPolicy() {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'http://web.mta.info/status/serviceStatus.txt'
    const that = this;
    fetch(proxyUrl + targetUrl, {

      headers: {
        origin: 'http://web.mta.info/status'
      }
    })
      .then(response => response.text())
      .then(data => {

        parseString(data, function (err, result) {

          that.setState({
            lineList: result["service"]["subway"][0]["line"],

          })
        });

      })
      .catch(e => {
        console.log(e);
        return e;
      })
  }

 

  logo = (statusWord) => {

    switch (statusWord) {
      case "GOOD SERVICE":
        return "https://vignette.wikia.nocookie.net/artemisfowl/images/8/8b/CPrince_Headpiece_Good.png/revision/latest?cb=20111011224553"
        break;
      case "PLANNED WORK":
        return "https://dietmarbi.files.wordpress.com/2010/10/attention-sign-critical.png"
        break;
      case "DELAYS":
        return "https://cdn2.iconfinder.com/data/icons/postal-service-cute-illustration/512/Delay-512.png"
        break;
      default:
        return "https://img.icons8.com/windows/1600/subway.png"
    }

  }

  lineColor = (linename) => {

    switch (linename) {
      case "123":
        return "red"
        break;
      case "456":
        return "#20a54d"
        break;
      case "7":
        return "#ba34ad"
        break;
      case "ACE":
        return "#2850ba"
        break;
      case "BDFM":
        return "#ff6602"
        break;
      case "G":
        return "#7fd353"
        break;
      case "JZ":
        return "#b19264"
        break;
      case "L":
        return "#868789"
        break;
      case "NQR":
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

  findMatch = (name) => {
    // Loop through statusList and find a match
    // const result = words.filter(word => word.length > 6);
    // lineList["name"][0].filter(name => name === "123")
    // .then(({data}) => 
    // console.log(data))
    // that.setState({
    //   topHeader:statusList["ReasonName"],

    // })

    let match = this.props.statusList.filter(line => {

      return (
        name.indexOf(line["Affects"]["0"]["VehicleJourneys"]["0"]["AffectedVehicleJourney"]["0"]["LineRef"]["0"].slice(-1)) !== -1
      )
    })
    this.setState({ matches: match })


  }
  // findW = (name) => {
  //   if (this.props === "NQR"){
  //     return "NQRW"
  //   }
  //   else {
  //     return (this.props)
  //   }
  // }
  

  render() {

    return (

      <div className="container text-center dogmatch widthBox ">

        <div className="container mx-auto all">

          {
            this.state.lineList.map(line => (
              <Summary
                name={line["name"][0]}
                // lineStatus = {line.reasonName}
                status={line["status"][0]}
                subDate={line["Date"][0]}
                src={this.logo(line["status"][0])}
                backgroundcolor={this.lineColor(line["name"][0])}
                findMatch={this.findMatch}
                matches={this.state.matches}
                // findW = {this.findW}
              />


            ))
          }

        </div>
      </div>


    )
  }
}

export default SummaryA;



