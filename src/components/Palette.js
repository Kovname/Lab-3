import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import palettes from '../pallete.json';

function Palette() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const { id } = useParams();
  
  const palette = palettes.find(p => p.id === id);

  const handleColorClick = (color) => {
    const audio = new Audio('/src_notify.mp3');
    audio.play();
    
    navigator.clipboard.writeText(color.color);
    setSelectedColor(color);
    setShowOverlay(true);
    
    setTimeout(() => {
      setShowOverlay(false);
    }, 1500);
  };

  return (
    <div className="palette">
      <div className="colors-grid">
        {palette.colors.map(color => (
          <div
            key={color.name}
            className="color-box"
            style={{ backgroundColor: color.color }}
            onClick={() => handleColorClick(color)}
          >
            <div className="copy-button">COPY</div>
            <div className="color-info">
              <span>{color.name}</span>
              <span>{color.color}</span>
            </div>
          </div>
        ))}
      </div>
      
      {showOverlay && (
        <div 
          className="color-overlay"
          style={{ backgroundColor: selectedColor.color }}
        >
          <div className="overlay-content">
            <h3>Скопировано!</h3>
            <p>{selectedColor.color}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Palette; 