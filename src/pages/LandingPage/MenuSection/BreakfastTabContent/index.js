import React from 'react';

import {
  breakfastOmelettes,
  breakfastSandwiches,
  breakfastSoups,
} from '../../../../constants/menuSectionData';

import './styles.scss';

export default function BreakfastTabContent() {
  return (
    <div className="breakfast">
      <div className="breakfast__grid-container">
        <div className="breakfast__grid-omelettes">
          <h3 className="dish-type">Omelettes</h3>
          {breakfastOmelettes.map((item) => (
            <div className="dish" key={item.name}>
              <h3 className="dish__name">{item.name}</h3>
              <h3 className="dish__price">{item.price}</h3>
              <div className="dish__divider" />
              <p className="dish__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="breakfast__grid-sandwiches">
          <h3 className="dish-type">Sandwiches</h3>
          {breakfastSandwiches.map((item) => (
            <div className="dish" key={item.name}>
              <h3 className="dish__name">{item.name}</h3>
              <h3 className="dish__price">{item.price}</h3>
              <div className="dish__divider" />
              <p className="dish__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="breakfast__grid-soups">
          <h3 className="dish-type">Soups</h3>
          {breakfastSoups.map((item) => (
            <div className="dish" key={item.name}>
              <h3 className="dish__name">{item.name}</h3>
              <h3 className="dish__price">{item.price}</h3>
              <div className="dish__divider" />
              <p className="dish__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div />
      </div>
    </div>
  );
}
