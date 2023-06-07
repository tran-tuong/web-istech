import React from 'react';
import './Footer.scss';
import images from '../../../assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { media_links } from '../../../assets/media-links';

export default function Footer() {
  return (
    <footer className='pt-4 pb-4'>
      <div className='container d-flex justify-content-between footer'>
        <div className='club-info'>
          <p className='club-info-name'>Câu lạc bộ Công nghệ Thông tin</p>
          <p className='club-info-university'>Trường Quốc Tế - Đại Học Quốc Gia Hà Nội</p>
          <span className='club-info-copyright'>
            Copyright 
            <FontAwesomeIcon icon={faCopyright} className='icon-copyright'/>
            2023 ISTECH
          </span>
        </div>
        <div className='club-media'>
          <div className='media d-flex'>
            <a href={media_links.facebook} className='wrapper-icon'><FontAwesomeIcon icon={faFacebookF} className='icon' /></a>
            <a href={media_links.linkedin} className='wrapper-icon'><FontAwesomeIcon icon={faLinkedinIn} className='icon' /></a>
            <a href={media_links.instagram} className='wrapper-icon'><FontAwesomeIcon icon={faInstagram} className='icon' /></a>
            <a href={media_links.mail} className='wrapper-icon'><FontAwesomeIcon icon={faEnvelope} className='icon' /></a>
          </div>
          <div className='languages mt-4'>
            <span>Language:</span>
            <a href='#' className='vn-language'>
              <img src={images.flagVN} alt='Vietnamese' />
            </a>
            <a href='#' className='en-language'>
              <img src={images.flagGB} alt='English' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
