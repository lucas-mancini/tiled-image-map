import React, { Component } from 'react';
import ZoomControl from './ZoomControl';
import ImageTile from './ImageTile';
import './MapView.scss';

class MapView extends Component {

  constructor (props) {
    super(props);

    this.state = {
      zoomLevel: 0 // possible zoom level values: 0, 1, 2, 3
    }
  }

  handleIncreaseZoomLevel = () => {
    this.setState(prevState => ({
      zoomLevel: prevState.zoomLevel < 3 ? prevState.zoomLevel + 1 : prevState.zoomLevel
    }));
  }

  handleDecreaseZoomLevel = () => {
    this.setState(prevState => ({
      zoomLevel: prevState.zoomLevel > 0 ? prevState.zoomLevel - 1 : prevState.zoomLevel
    }));
  }

  render () {
    const { zoomLevel } = this.state;

    // TODO: retrieve array of images depending on zoom level

    return (
      <div className='MapView'>
        <ZoomControl onZoomIn={this.handleIncreaseZoomLevel} onZoomOut={this.handleDecreaseZoomLevel} />
        <ImageTile src='../tiled/0/0/0.jpg' />
      </div>
    );
  }

}

export default MapView;
