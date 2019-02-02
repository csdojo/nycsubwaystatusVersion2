import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Map from "./Components/Pages/Map"
import SummaryA from "./Components/Pages/SummaryA";
import Train from "./Components/Pages/Train";
import TrainSIR from "./Components/Pages/TrainSIR";


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
        <Route exact path="/Train7" component={Train}/>
        <Route exact path="/TrainA" component={Train}/>
        <Route exact path="/TrainC" component={Train}/>
        <Route exact path="/TrainE" component={Train}/>
        <Route exact path="/TrainB" component={Train}/>
        <Route exact path="/TrainD" component={Train}/>
        <Route exact path="/TrainF" component={Train}/>
        <Route exact path="/TrainM" component={Train}/>
        <Route exact path="/TrainG" component={Train}/>
        <Route exact path="/TrainJ" component={Train}/>
        <Route exact path="/TrainZ" component={Train}/>
        <Route exact path="/TrainL" component={Train}/>
        <Route exact path="/TrainN" component={Train}/>
        <Route exact path="/TrainQ" component={Train}/>
        <Route exact path="/TrainR" component={Train}/>
        <Route exact path="/TrainW" component={Train}/>
        <Route exact path="/TrainS" component={Train}/>
        <Route exact path="/TrainSIR" component={TrainSIR}/>
      </div>
      </Router>
    );
  }
}

export default App;
