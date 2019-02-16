import React from 'react';
import './ZoomControl.scss';

const ZoomControl = ({ onZoomIn, onZoomOut }) => (
  <div className='ZoomControl'>
    <button className='ZoomControl-button' type='button' onClick={onZoomIn}>+</button>
    <button className='ZoomControl-button' type='button' onClick={onZoomOut}>-</button>
  </div>
)

export default ZoomControl;
