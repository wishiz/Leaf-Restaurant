import React from 'react';

import {
  dessertsSweets,
  dessertsCakes,
  dessertsFruits,
} from '../../../../constants/menuSectionData';

import './styles.scss';

export default function DessertsTabContent() {
  return (
    <div className="desserts">
      <div className="desserts__grid-container">
        <div className="desserts__grid-sweets">
          <h3 className="dish-type">Sweets</h3>
          {dessertsSweets.map((item) => (
            <div className="dish" key={item.name}>
              <h3 className="dish__name">{item.name}</h3>
              <h3 className="dish__price">{item.price}</h3>
              <div className="dish__divider" />
              <p className="dish__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="desserts__grid-cakes">
          <h3 className="dish-type">Cakes</h3>
          {dessertsCakes.map((item) => (
            <div className="dish">
              <h3 className="dish__name">{item.name}</h3>
              <h3 className="dish__price">{item.price}</h3>
              <div className="dish__divider" />
              <p className="dish__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="desserts__grid-fruits">
          <h3 className="dish-type">Fruits</h3>
          {dessertsFruits.map((item) => (
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
