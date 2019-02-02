import React, { Component } from "react";
import Train1A from "./Train1A";
import xml2js from 'xml2js';
import "./style.css";

var parseString = xml2js.parseString;


class TrainSIR extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lineList: [],
            matches: [],
            subDate: "",
            reasonName: "",
            matches: "",
            anotherList: [],
            name: "",
            lineName: "",
            longDescription: "",
            statusImgsrc:"",
            allGoodlist:[],
        };
        this.train1Status = this.train1Status.bind(this);

    }

    componentDidMount() {
        this.setState({ lineName: "SIR" });
        this.train1Status()
    }

    train1Status() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var targetUrl = 'http://web.mta.info/status/ServiceStatusSubway.xml'
        const that = this;
        fetch(proxyUrl+targetUrl)
            .then(response => response.text())
            .then(data => {


                parseString(data, function (err, result) {
                    var longtime = result["Siri"]["ServiceDelivery"]["0"]["ResponseTimestamp"][0];

                    var date = longtime.substr(0, longtime.indexOf('T'));


                    that.setState({
                        lineList: result["Siri"]["ServiceDelivery"]["0"]["SituationExchangeDelivery"]["0"]["Situations"]["0"]["PtSituationElement"],
                        allGoodlist : result["Siri"]["ServiceDelivery"]["0"]["SituationExchangeDelivery"]["0"]["Situations"]["0"],
                        subDate: date
                    })
                    that.findMatch();
                });

            })
            .catch(e => {
                console.log(e);
                return e;
            })
    }


    findMatch = () => {

        var name = "SI";

        if (((this.state.allGoodlist).length) === 0){
            this.setState({
                reasonName: "Good Service",
                
            })
        }
        else {var filteredLinelist = this.state.lineList.filter(line => {
            line = line["Affects"]["0"]["VehicleJourneys"]["0"]["AffectedVehicleJourney"]["0"]["LineRef"][0]

            return (
                line.slice(line.length - 2) === name
            )
        })

        var mapLinelist = filteredLinelist.map(mapline => {
            return (
                mapline["ReasonName"]
            )
        })

        var longDeslist = filteredLinelist.map(mapDes => {
            return (
                mapDes["LongDescription"][0]
            )
        })

        //can add more object for more data

        if (filteredLinelist.length === 0) {
            this.setState({
                reasonName: "Good Service",
                
            })
        } else {

            var longDes = longDeslist[0];

            var getridofHtmlTag = longDes.replace(/(<([^>]+)>)/ig, "")

            // var matches = (getridofHtmlTag.match(/\[(.*?)\]/)).map(function(str){
            //     return str
            // });

            // console.log(matches)
            // if (matches) {
            //     var submatch = matches[1];

            //     console.log(submatch)
            // }

            this.setState({
                reasonName: mapLinelist[0],
                longDescription: getridofHtmlTag
            })
        } }

        

    }

    logo = (statusWord) => {

        switch (statusWord) {
          case "Good Service":
            return "https://pngimage.net/wp-content/uploads/2018/06/on-time-png-7.png"
            break;
          case '"Planned Work"':
            return "https://dietmarbi.files.wordpress.com/2010/10/attention-sign-critical.png"
            break;
          case 'Delays':
            return "http://pluspng.com/img-png/time-png-similar-time-png-image-200.png"
            break;
          default:
            return "https://static.thenounproject.com/png/1593433-200.png"
        }
    
      }

    render() {
        return (
            <div className="titleStripe">

                <Train1A
                    reasonName={this.state.reasonName}
                    lineName={this.state.lineName}
                    subDate={this.state.subDate}
                    longDescription={this.state.longDescription}
                    statusImgsrc={this.logo(this.state.reasonName)}
                />

            </div>

        );
    }


}



export default TrainSIR;