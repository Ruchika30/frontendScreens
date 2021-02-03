import React, { useEffect, useState } from 'react';
import style from './style.scss';
import {
  faBookReader, faBookmark,
  faHeart,
  faNewspaper,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcons = () => (
  <div className="social-icons">
    <div>
      <FontAwesomeIcon icon={faBookmark} className="icons" />
    </div>

    <div>
      <FontAwesomeIcon icon={faBookmark} className="icons" />
    </div>
    <div>
      <FontAwesomeIcon icon={faBookmark} className="icons" />
    </div>
    <div>
      <FontAwesomeIcon icon={faBookmark} className="icons" />
    </div>
  </div>
);

export default SocialIcons;
