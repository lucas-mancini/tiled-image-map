import React, { Component } from 'react';
import ElementPan from 'react-element-pan';
import ZoomControl from './ZoomControl';
import ImageTile from './ImageTile';
import TileMatrices from './TileMatrices.json'
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

    // Retrieve matrix of images depending on zoom level
    const tileMatrix = TileMatrices[zoomLevel];

    return (
      <div className='MapView'>
        <ZoomControl onZoomIn={this.handleIncreaseZoomLevel} onZoomOut={this.handleDecreaseZoomLevel} />
        <ElementPan
          className='MapView-pan'
          width={600}
          height={600}
          startX={300} // todo: update with the saved position value
          startY={300}
          onPanStart={_coords => {

          }}
          onPanStop={_coords => {
            // update current position
          }}>
          {
            tileMatrix.map((row, index) => (
              <div className='MapView-row' key={`row-${index}`}>
                {
                  row.map(tile => <ImageTile src={tile} key={tile} />)
                }
              </div>
            ))
          }
        </ElementPan>
      </div>
    );
  }

}

export default MapView;
