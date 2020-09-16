import React from 'react';

import {
  dinnerSushi,
  dinnerPasta,
  dinnerMain,
  dinnerWines,
} from '../../../../constants/menuSectionData';

import './styles.scss';

export default function DessertsTabContent() {
  return (
    <div className="dinner">
      <div className="dinner__grid-container">
        <div className="dinner__grid-sushi">
          <h3 className="dish-type">Sushi</h3>
          {dinnerSushi.map((item) => (
            <div className="dish" key={item.name}>
              <h3 className="dish__name">{item.name}</h3>
              <h3 className="dish__price">{item.price}</h3>
              <div className="dish__divider" />
              <p className="dish__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="dinner__grid-pasta">
          <h3 className="dish-type">Pasta</h3>
          {dinnerPasta.map((item) => (
            <div className="dish">
              <h3 className="dish__name">{item.name}</h3>
              <h3 className="dish__price">{item.price}</h3>
              <div className="dish__divider" />
              <p className="dish__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="dinner__grid-main">
          <h3 className="dish-type">Main</h3>
          {dinnerMain.map((item) => (
            <div className="dish">
              <h3 className="dish__name">{item.name}</h3>
              <h3 className="dish__price">{item.price}</h3>
              <div className="dish__divider" />
              <p className="dish__desc">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="dinner__grid-wines">
          <h3 className="dish-type">Wines</h3>
          {dinnerWines.map((item) => (
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
