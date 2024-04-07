// pages/Page_Calendar.jsx
import React, { useState, useRef } from 'react';
import '../pages/page_Calendar.css'; // Import your CSS file for styling
import CalgaryMap from '../assets/CalgaryMap35.png';
import whereLogo from '../assets/CurrentLocationBlack.png';

const Page_Calendar = () => {
  const [zoomLevel, setZoomLevel] = useState(2);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const mapRef = useRef(null);
  

  const handleZoomIn = () => {
    setZoomLevel(prevZoomLevel => prevZoomLevel + 0.4);
  };

  const handleZoomOut = () => {
    setZoomLevel(prevZoomLevel => prevZoomLevel - 0.4);
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStartX(event.clientX - offsetX);
    setDragStartY(event.clientY - offsetY);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      setOffsetX(event.clientX - dragStartX);
      setOffsetY(event.clientY - dragStartY);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  const handleMouseWheel = (event) => {
    if (event.deltaY < 0) {
      handleZoomIn();
    } else {
      handleZoomOut();
    }
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setOffsetX(0);
    setOffsetY(0);
  };

  const handleLocationButtonClick = (location) => {
    // Handle location button click to center and zoom in on the specified location
    // Adjust the offsetX and offsetY to center the map on the specified location
    switch (location) {
      case 'NE':
        const locX_NE = -65;
        const locY_NE = 135;
        setOffsetX(locX_NE);
        setOffsetY(locY_NE);
        setZoomLevel(3);
        break;
      case 'SE':
        const locX_SE = -60
        const locY_SE = -50
        setOffsetX(locX_SE);
        setOffsetY(locY_SE);
        setZoomLevel(2.5);
        break;
      case 'SW':
        const locX_SW = 45;
        const locY_SW = -50;
        setOffsetX(locX_SW);
        setOffsetY(locY_SW);
        setZoomLevel(2.5);
        break;
      case 'NW':
        const locX_NW = 45;
        const locY_NW = 135;
        setOffsetX(locX_NW);
        setOffsetY(locY_NW);
        setZoomLevel(3);
        break;
      case 'Downtown':
        const locX_Downtown = -20;
        const locY_Downtown = 50;
        setOffsetX(locX_Downtown);
        setOffsetY(locY_Downtown);
        setZoomLevel(7);
        break;
      default:
        // Do nothing
        break;
    }
  };

  return (
    <div>
      <div
        className="map-container"
        onWheel={handleMouseWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img
          ref={mapRef}
          src={CalgaryMap}
          alt="Calgary Map"
          className="map-image"
          style={{
            transform: `scale(${zoomLevel}) translate(${offsetX}px, ${offsetY}px)`,
          }}
        />
        
        <img
          src={whereLogo}
          alt="whereLogo"
          className="resetButton"
          onClick={handleResetZoom}
        />

      </div>
      <div className="filters-container">
        <div className="location-buttons">
          <button onClick={() => handleLocationButtonClick('NW')}>NW</button>
          <button onClick={() => handleLocationButtonClick('NE')}>NE</button>
          <button onClick={() => handleLocationButtonClick('SW')}>SW</button>
          <button onClick={() => handleLocationButtonClick('SE')}>SE</button>
          <button onClick={() => handleLocationButtonClick('Downtown')}>Downtown</button>
        </div>
        
      </div>
    </div>
  );
};

export default Page_Calendar;
