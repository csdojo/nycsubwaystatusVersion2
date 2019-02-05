import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Map from "./Components/Pages/Map"
import SummaryA from "./Components/Pages/SummaryA";
import Train from "./Components/Pages/Train";
import TrainSIR from "./Components/Pages/TrainSIR";
import TrainACE from "./Components/Pages/TrainACE";
import TrainNQRW from "./Components/Pages/TrainNQRW";
import TrainBDFM from "./Components/Pages/TrainBDFM";
import TrainL from "./Components/Pages/TrainL";
import TrainG from "./Components/Pages/TrainG";
import TrainJZ from "./Components/Pages/TrainJZ";
import Train7 from "./Components/Pages/Train7";
import TrainM from "./Components/Pages/TrainM";


class App extends Component {

  state = {
    name:""
  }


  render() {
    return (
      <Router>
      <div>
        <Navbar/>
        <Route exact path="/" component={SummaryA}/>
        <Route exact path="/map" component={Map} />
        <Route exact path="/Train1" component={Train}/>
        <Route exact path="/Train2" component={Train}/>
        <Route exact path="/Train3" component={Train}/>
        <Route exact path="/Train4" component={Train}/>
        <Route exact path="/Train5" component={Train}/>
        <Route exact path="/Train6" component={Train}/>
        <Route exact path="/Train7" component={Train7}/>
        <Route exact path="/TrainA" component={TrainACE}/>
        <Route exact path="/TrainC" component={TrainACE}/>
        <Route exact path="/TrainE" component={TrainACE}/>
        <Route exact path="/TrainB" component={TrainBDFM}/>
        <Route exact path="/TrainD" component={TrainBDFM}/>
        <Route exact path="/TrainF" component={TrainBDFM}/>
        <Route exact path="/TrainM" component={TrainM}/>
        <Route exact path="/TrainG" component={TrainG}/>
        <Route exact path="/TrainJ" component={TrainJZ}/>
        <Route exact path="/TrainZ" component={TrainJZ}/>
        <Route exact path="/TrainL" component={TrainL}/>
        <Route exact path="/TrainN" component={TrainNQRW}/>
        <Route exact path="/TrainQ" component={TrainNQRW}/>
        <Route exact path="/TrainR" component={TrainNQRW}/>
        <Route exact path="/TrainW" component={TrainNQRW}/>
        <Route exact path="/TrainS" component={Train}/>
        <Route exact path="/TrainSIR" component={TrainSIR}/>
      </div>
      </Router>
    );
  }
}

export default App;
