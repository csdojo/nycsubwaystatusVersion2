import React, { Component } from 'react';

import "./styleMap.css";


class Map extends Component {

  render() {

    return (
      <div className="mapBox">

        <a className="lightbox" href="#dog">
        {/* <div class="image-div" style="background-image:url(thePage)" */}
          <img src="https://pixel.nymag.com/imgs/daily/intelligencer/2016/05/26/26-subway-map-1.nocrop.w710.h2147483647.jpg" />
        </a>
        <div className="lightbox-target" id="dog">
          <img src="https://pixel.nymag.com/imgs/daily/intelligencer/2016/05/26/26-subway-map-1.nocrop.w710.h2147483647.jpg" />
          <a className="lightbox-close" href="#"></a>
        </div>

        <a className="lightbox" href="#cat">
          <img src="http://ameliabusinessdirectory.com/wp-content/uploads/2018/11/Brooklyn-subway-map-from-wallydogwear-6.jpg" />
        </a>
        <div className="lightbox-targetCat" id="cat">
          <img src="http://ameliabusinessdirectory.com/wp-content/uploads/2018/11/Brooklyn-subway-map-from-wallydogwear-6.jpg" />
          <a className="lightbox-close" href="#"></a>
        </div>

        <a className="lightbox" href="#bronx">
          <img src="https://i.pinimg.com/originals/91/f0/35/91f035ebeeb6e749c972edf090195d10.gif" />
        </a>
        <div className="lightbox-targetBronx" id="bronx">
          <img src="https://i.pinimg.com/originals/91/f0/35/91f035ebeeb6e749c972edf090195d10.gif" />
          <a className="lightbox-close" href="#"></a>
        </div>

        
        {/* <div className="mapBox">
          <img className="map" src="https://pixel.nymag.com/imgs/daily/intelligencer/2016/05/26/26-subway-map-1.nocrop.w710.h2147483647.jpg" alt="" />
        </div> */}
      </div>

    )

  }
}


export default Map;