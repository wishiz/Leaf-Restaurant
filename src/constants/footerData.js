import React from 'react';

import {
  FaInstagram,
  FaYelp,
  FaFoursquare,
  FaTripadvisor,
} from 'react-icons/fa';

import { nanoid } from 'nanoid';

export const footerText = {
  desc:
    'We would love to serve you and let you enjoy our culinary experience, you can find us at —',
  address: 'Strandgade 93, Dnipro',
  country: 'Ukraine',
  tel: '+380123456789',
  email: 'eugeniavoloshina@gmail.com',
  weekdays: '10:00 - 20:00',
  weekends: '10:00 - 23:00',
};

export const footerSocials = [
  {
    id: nanoid(),
    name: 'instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/',
  },
  {
    id: nanoid(),
    name: 'yelp',
    icon: <FaYelp />,
    url: 'https://www.yelp.com/',
  },
  {
    id: nanoid(),
    name: 'foursquare',
    icon: <FaFoursquare />,
    url: 'https://foursquare.com/',
  },
  {
    id: nanoid(),
    name: 'tripadvisor',
    icon: <FaTripadvisor />,
    url: 'https://www.tripadvisor.com/',
  },
];
