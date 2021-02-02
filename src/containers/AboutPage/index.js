import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar_b';

import { useHistory,  } from 'react-router-dom';

import style from './style.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

const AboutPage = ({ location }) => {
  const history = useHistory();
  const [idValue, setIdValue] = useState('');
  const [isVisible, setNavbarVisible] = useState(true);

  const openInNewTab = url => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div>
      <div>
        <Navbar fixed={isVisible} />
      </div>

      <div style={{ width: '80%', display: 'flex', margin: 'auto' }}>
        <div style={{ marginTop: '100px', width: '60%' }}>
          <div className="abtTitle"> About Us </div>

          <div className="contentContainer">
            We are a group of recent graduates creating a place of industry and career experts to help an individual get clarity on his profession in future.
          </div>

          <div className="contentContainer">
            We'd love to have you in our network where students and career seekers get realistic perspective of their lives ahead.

          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px' }}>
            <div className="contentContainer" onClick={() => openInNewTab('https://twitter.com/Schooltolife1')}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="contentContainer" onClick={() => openInNewTab('https://www.instagram.com/schooltolife/')}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="contentContainer" onClick={() => openInNewTab('https://www.linkedin.com/company/schooltolife/')}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AboutPage;
