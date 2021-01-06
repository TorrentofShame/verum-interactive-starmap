import React from "react";

import Selector from "./Selector";
import InfoPanel from "./InfoPanel";

const planets = require("./planets.js");

class InteractiveMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "",
      winHeight: 937,
      winWidth: 1920
    };
    
    for (let p of planets) {
      this.state[p.name] = {selected: false, hovered: false};
    }

    this.handleMapImgLoaded = this.handleMapImgLoaded.bind(this);
    this.handlePlanetClick = this.handlePlanetClick.bind(this);
    this.handlePlanetMouseOver = this.handlePlanetMouseOver.bind(this);
    this.handlePlanetMouseOut = this.handlePlanetMouseOut.bind(this);
    this.handleMapResize = this.handleMapResize.bind(this);
  }

  handlePlanetClick(planet) {
    let newPlanetState = this.state;
    newPlanetState.selected = planet !== this.state.selected ? planet : "";
    this.setState(() => (newPlanetState));
  }

  handlePlanetMouseOver(planet) {
    let newPlanetState = this.state;
    newPlanetState[planet] = {selected: this.state[planet].selected, hovered: true};
    this.setState(() => (newPlanetState));
  }

  handlePlanetMouseOut(planet) {
    let newPlanetState = this.state;
    newPlanetState[planet] = {selected: this.state[planet].selected, hovered: false};
    this.setState(() => (newPlanetState));
  }

  handleMapResize(e) {
    this.setState(state => {
      let mapimg = e.currentTarget.document.getElementById("map-img");
      return {
        ...state,
        winWidth: e.currentTarget.innerWidth,
        winHeight: e.currentTarget.innerHeight,
        imgWidth: typeof mapimg !== "undefined" ? mapimg.width : undefined
      };
    });
  }

  handleMapImgLoaded(e) {
    this.setState(state => {
      return {
        ...state,
        imgWidth: e.target.width,
        winWidth: e.target.offsetParent.clientWidth,
        winHeight: e.target.offsetParent.clientHeight
      };
    });
  }

  poiAreaCreator(poi) {
    let size = Math.max(poi.size*this.state.imgWidth/1920, poi.size*this.state.winHeight/937);
    return (
      <div
        key={`${poi.pos_x}-${poi.pos_y}`}
        className="planet-area"
        onClick={() => this.handlePlanetClick(poi.name)}
        onMouseOver={() => this.handlePlanetMouseOver(poi.name)}
        onFocus={() => this.handlePlanetMouseOver(poi.name)}
        onMouseOut={() => this.handlePlanetMouseOut(poi.name)}
        onBlur={() => this.handlePlanetMouseOut(poi.name)}
        aria-hidden="true"
        style={{
          top: `${(poi.pos_y*this.state.winHeight)-((poi.size/2)*this.state.winHeight/937)}px`,
          left: `${(poi.pos_x*this.state.imgWidth)+this.state.winWidth-this.state.imgWidth-((poi.size/2)*this.state.imgWidth/1920)}px`,
          width: `${size}px`,
          height: `${size}px`
        }}>
        <Selector
          size={size}
          winH={this.state.winHeight}
          planet_name={poi.name}
          isvisible={this.state.selected === poi.name || this.state[poi.name].hovered ? "visible" : "hidden"}
        />
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleMapResize);
    window.addEventListener("load", this.handleMapResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleMapResize);
    window.removeEventListener("load", this.handleMapResize);
  }

  render() {
    const selectedPoi = planets.find((v) => v.name === this.state.selected);
    const pois = planets.map((p) => this.poiAreaCreator(p, this));

    return (
      <div className="map">
        <img
          id="map-img"
          onLoad={this.handleMapImgLoaded}
          width={1920}
          height={1080}
          className="map-img"
          src="/assets/Verum_Galaxy_no_overlay_1920x1080.png"
          alt=""
        />
        {pois }
        {selectedPoi &&
          <InfoPanel planet={{name: selectedPoi.name, ...selectedPoi.info}}/>
        }
        <a
          className="artist-credit"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/yowto_"
          aria-label="All credit to the art goes to @yowto_ on Twitter"
        > </a>
      </div>
    );
  }
}

export default InteractiveMap;
