import React from 'react';

import types from 'prop-types';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import {
  GOOGLE_MAPS_API_KEY,
  maltaLatLong,
  restaurantMarker,
} from '../../constants/reserveSectionData';

import './styles.scss';

export function GoogleMapContainer({ google }) {
  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
  };

  return (
    <Map
      style={containerStyle}
      className="google-map"
      google={google}
      zoom={16}
      initialCenter={maltaLatLong}
    >
      <Marker position={restaurantMarker} title="Our location" />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_API_KEY,
  language: 'en',
})(GoogleMapContainer);

GoogleMapContainer.propTypes = {
  google: types.objectOf(types.object),
};
