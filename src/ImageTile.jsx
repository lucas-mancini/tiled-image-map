import React from 'react';
import './ImageTile.scss';

const ImageTile = ({ src }) => (
  <img className='ImageTile' src={src} alt='tile' />
)

export default ImageTile;
