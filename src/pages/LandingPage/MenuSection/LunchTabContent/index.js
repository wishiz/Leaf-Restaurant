import React from 'react';

import {
  lunchChicken,
  lunchSteak,
  lunchFish,
} from '../../../../constants/menuSectionData';

import './styles.scss';

export default function DessertsTabContent() {
  return (
    <div className="lunch">
      <div className="lunch__grid-container">
        <div className="lunch__grid-chicken">
          <h3 className="dish-type">Chicken</h3>
          {lunchChicken.map((item) => (
            <div className="dish">
              <h3 className="dish__name">{item.name}</h3>
              <h3 className="dish__price">{item.price}</h3>
              <div className="dish__divider" />
              <p className="dish__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="lunch__grid-steak">
          <h3 className="dish-type">Steak</h3>
          {lunchSteak.map((item) => (
            <div className="dish" key={item.name}>
              <h3 className="dish__name">{item.name}</h3>
              <h3 className="dish__price">{item.price}</h3>
              <div className="dish__divider" />
              <p className="dish__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="lunch__grid-fish">
          <h3 className="dish-type">Fish</h3>
          {lunchFish.map((item) => (
            <div className="dish">
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
