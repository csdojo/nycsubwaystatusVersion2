// import axios
import axios from 'axios';

export default {
 
  getStationData: function() {
    return axios.get(`/api/stationdata`);
    
  },
 
  getStopfile: function(){
    return axios.get(`/api/stopFile`);
  }
}
