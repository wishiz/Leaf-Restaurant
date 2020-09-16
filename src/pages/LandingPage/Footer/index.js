import React from 'react';

import { Link } from 'react-scroll';

import ContentWidthLimiter from '../../../components/ContentWidthLimiter';
import ReactIcon from '../../../components/ReactIcon';

import { footerText, footerSocials } from '../../../constants/footerData';

import './styles.scss';

export default function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <ContentWidthLimiter className="footer__container">
        <div className="footer__contacts">
          <h3 className="footer__title">Location</h3>

          <div className="footer__info-block">
            <div>
              <p className="footer__desc">{footerText.desc}</p>
              <div className="footer__address">
                <p>{footerText.address}</p>
                <p>{footerText.country}</p>
              </div>
            </div>

            <div>
              <div className="footer__tel">
                <p>Tel: </p>
                <a href={`tel:${footerText.tel}`}>{footerText.tel}</a>
              </div>

              <div className="footer__email">
                <p>E-mail: </p>
                <a href={`mailto:${footerText.email}`}>{footerText.email}</a>
              </div>

              <div className="footer__socials">
                {footerSocials.map((elem) => (
                  <a href={elem.url} key={elem.id}>
                    <ReactIcon size="lg" color="white">
                      {elem.icon}
                    </ReactIcon>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer__opentime">
          <h3 className="footer__title">Opening times</h3>
          <div className="footer__weekdays">
            <p className="opentime__days">Monday - Friday </p>
            <p className="opentime__time">{footerText.weekdays}</p>
          </div>
          <div className="footer__weekends">
            <p className="opentime__days">Saturday - Sunday</p>
            <p className="opentime__time">{footerText.weekends}</p>
          </div>
          <Link
            isDynamic
            duration={500}
            smooth
            offset={-60}
            spy
            to="reserve"
            className="footer__reserve"
          >
            Make a reservation!
          </Link>
        </div>
      </ContentWidthLimiter>
    </footer>
  );
}
