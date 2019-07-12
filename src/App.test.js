import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

const createZoomIn = getByText => () => fireEvent.click(getByText('+'));
const createZoomOut = getByText => () => fireEvent.click(getByText('-'));

describe('basic rendering', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<App />);

    const header = getByText(/tiled image map/i);
    expect(header).toBeInTheDocument();
  });

  it('renders one image at the beginning', () => {
    const { getByAltText } = render(<App />);
    expect(getByAltText('Tile')).toBeInTheDocument();
  });
});

describe('zoom', () => {
  it('renders more images as you zoom in', () => {
    const { container, getByText } = render(<App />);

    const zoomIn = createZoomIn(getByText);
    zoomIn();

    const tiles = container.querySelectorAll('.ImageTile');
    expect(tiles.length).toBe(4);
  });

  it('you can zoom out', () => {
    const { container, getByText } = render(<App />);

    const zoomIn = createZoomIn(getByText);
    const zoomOut = createZoomOut(getByText);

    zoomIn();
    zoomIn();

    zoomOut();
    zoomOut();

    // zoom level should be 0 again, so only one image is rendered
    const tiles = container.querySelectorAll('.ImageTile');
    expect(tiles.length).toBe(1);
  });

  it('has a maximum zoom level', () => {
    const { container, getByText } = render(<App />);

    const zoomIn = createZoomIn(getByText);

    zoomIn();
    zoomIn();
    zoomIn();

    const tiles = container.querySelectorAll('.ImageTile');
    expect(tiles.length).toBe(64);
  })
});
