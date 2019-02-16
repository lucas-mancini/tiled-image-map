import React, { Component } from 'react';
import ZoomControl from './ZoomControl'
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
    }))
  }

  handleDecreaseZoomLevel = () => {
    this.setState(prevState => ({
      zoomLevel: prevState.zoomLevel > 0 ? prevState.zoomLevel - 1 : prevState.zoomLevel
    }))
  }

  render () {
    return (
      <div className='MapView'>
        <ZoomControl onZoomIn={this.handleIncreaseZoomLevel} onZoomOut={this.handleDecreaseZoomLevel} />
      </div>
    );
  }

}

export default MapView;
