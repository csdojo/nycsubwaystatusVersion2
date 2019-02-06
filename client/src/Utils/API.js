// import axios
import axios from 'axios';

export default {
 
  getStationData: function() {
    return axios.get(`/api/stationdata`);
    
  },

  getStationDataSIR: function() {
    return axios.get(`/api/stationdataSIR`);
  },

  
  getStationDataACE: function() {
    return axios.get(`/api/stationdataACE`);
  },

  
  getStationDataNQRW: function() {
    return axios.get(`/api/stationdataNQRW`);
  },

  
  getStationDataBDFM: function() {
    return axios.get(`/api/stationdataBDFM`);
  },
  
  getStationDataL: function() {
    return axios.get(`/api/stationdataL`);
  },

  
  getStationDataG: function() {
    return axios.get(`/api/stationdataG`);
  },
  
  getStationDataJZ: function() {
    return axios.get(`/api/stationdataJZ`);
  },

  
  getStationData7: function() {
    return axios.get(`/api/stationdata7`);
  },

  getStatusDetail: function() {
    return axios.get(`/api/statusdetail`);
  },

  
  getStatusSummary: function() {
    return axios.get(`/api/statussummary`);
  },

  getStopfile: function(){
    return axios.get(`/api/stopFile`);
  }
}
