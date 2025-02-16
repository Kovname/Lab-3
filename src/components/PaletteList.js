import React from 'react';
import { Link } from 'react-router-dom';
import palettes from '../pallete.json';

function PaletteList() {
  return (
    <div className="palette-list">
      {palettes.map(palette => (
        <Link 
          to={`/palette/${palette.id}`} 
          key={palette.id}
          className="palette-item"
        >
          <div className="palette-preview">
            {palette.colors.slice(0, 5).map(color => (
              <div 
                key={color.name}
                style={{ backgroundColor: color.color }}
                className="mini-color"
              />
            ))}
          </div>
          <div className="palette-info">
            <span>{palette.emoji}</span>
            <span>{palette.paletteName}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PaletteList; 