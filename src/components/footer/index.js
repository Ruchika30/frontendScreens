
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import style from './style';

const Footer = () => {
  const { liWrapper, footer } = style;
  return (
    <footer css={footer}>
      <div>
        ©Copyright Careeristic • 2020
      </div>
      {/* social icons */}
      <div>
        <ul>
          <li css={liWrapper}>
            <div>
              <SocialIcon url="https://www.instagram.com/careeristic/" />
            </div>
            <div>
              <SocialIcon url="https://www.linkedin.com/in/careeristic-in-8872311b9/" />
            </div>

          </li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;
