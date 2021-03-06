import React, { Component } from "react";
import Train1A from "./Train1A";
import xml2js from 'xml2js';
import API from "../../Utils/API";
import Station from "./Station";
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
            statusImgsrc: "",
            allGoodlist: [],
            allRouteID: [],
            station: [],
            uniqStation: [],
            stopFile: "",
            finalName: []
        };
        this.getStatusDetail = this.getStatusDetail.bind(this);

    }

    componentDidMount() {
        this.setState({ lineName: "SIR" });
        this.getStatusDetail();
        this.getStationData()
    }

    getStationData = () => {
        API.getStationDataSIR()
            .then((data) => {
                // console.log(data.data);
                this.setState({
                    allRouteID: data.data
                })
            }).then(() => {
                this.findStationForThisLine();
            })
    }

    getStopfile = () => {
        API.getStopfile()
            .then((data) => {

                data = data.data;

                this.setState({
                    stopFile: data
                })

                var hello = this.state.uniqStation.map(station => {
                    var stop = station;

                    var reg = new RegExp(stop + ",,(.*?),,");

                    var datamatch = data.match(reg);

                    // console.log(datamatch)

                    return (datamatch[1])
                })



                let sortedArrs = hello.sort();


                let uniq = [...new Set(sortedArrs)]

                this.setState({
                    finalName: uniq
                })

            })
    }

    getStatusDetail = () => {
        const that = this;
        API.getStatusDetail()
          .then((data) => {
            console.log(data);
            var src = data.data
            parseString(src, function (err, result) {
       
               var longtime = result["Siri"]["ServiceDelivery"]["0"]["ResponseTimestamp"][0];

            var date = longtime.substr(0, longtime.indexOf('T'));


            that.setState({
                lineList: result["Siri"]["ServiceDelivery"]["0"]["SituationExchangeDelivery"]["0"]["Situations"]["0"]["PtSituationElement"],
                allGoodlist: result["Siri"]["ServiceDelivery"]["0"]["SituationExchangeDelivery"]["0"]["Situations"]["0"],
                subDate: date
            })
            that.findMatch();
            })
            
          })
          .catch(e => {
                console.log(e);
                return e;
            })
      }


    findMatch = () => {

        var name = "SI";

        if (((this.state.allGoodlist).length) === 0) {
            this.setState({
                reasonName: "Good Service",

            })
        }
        else {
            var filteredLinelist = this.state.lineList.filter(line => {
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

                this.setState({
                    reasonName: mapLinelist[0],
                    longDescription: getridofHtmlTag
                })
            }
        }

    }

    findStationForThisLine = () => {

        var name = "SI";

        var findRouteId = this.state.allRouteID.filter(line => {
            line = line["trip"]["route_id"]
            return (
                line === name
            )
        })

        var stopList = findRouteId.map(stop => {
            return (
                stop["stop_time_update"]
            )
        })

        var eachstop = stopList.map(stop => {

            var eachEachStop = stop.map(stop2 => {

                return (
                    stop2["stop_id"]
                )

            })
            return eachEachStop;
        })


        let arrs = eachstop;
        let concatArrs = arrs.reduce((a, b) => [...a, ...b], []);
        let sortedArrs = concatArrs.sort();
        let uniq = [...new Set(sortedArrs)]
        this.setState({
            station: eachstop,
            uniqStation: uniq
        })

        this.getStopfile();



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

                {
                    this.state.finalName.map(line => (
                        <Station
                            whatname={line}


                        />
                    ))
                }

            </div>

        );
    }


}



export default TrainSIR;