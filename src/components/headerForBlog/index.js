import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
import style from './style.scss';
import {
  faBookReader,
  faNewspaper,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  banner, category, logo, logoWithTxt
} from '../../assets/icons';
import { render } from 'react-dom';
import { animated, useTransition } from 'react-spring';
import './animationStyle.css';
import { useHistory } from 'react-router-dom';
import bannerImg from '../../assets/icons/banner.jpeg';

const Header = props => {
  const {
    main, categoryName, description, noIcons, animationRqrd
  } = props;
  const [isFollowing, setFollowing] = useState(false);
  const history = useHistory();

  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0, height: 0, innerHeight: 0, transform: 'perspective(600px) rotateX(0deg)', color: '#1B1443'
    },
    enter: [
      { opacity: 1, height: 40, innerHeight: 65 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#01BBC8' },
      { transform: 'perspective(600px) rotateX(0deg)' }
    ],
    leave: [{ color: '#1B1443' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#1B1443' }
  });

  const first = 'Get Ready';
  const second = 'To Know';
  const third = 'How your Future';
  const fourth = 'Career looks like!';

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set([first, second, third]), 2000));
    ref.current.push(setTimeout(() => set([first, third]), 5000));
    ref.current.push(setTimeout(() => set([first, second, third]), 8000));
    ref.current.push(setTimeout(() => set([first, second, third, fourth]), 9000));
  }, []);

  useEffect(() => void reset(), [reset]);

  const handleLogoClick = () => {
    history.push('/');
  };

  return (
    <div>

      {!main
        ? (
          <div className="content-container">
            <div className="icon-container" onClick={handleLogoClick}>
              <img
                className="category-icon"
                src={category}
                alt="logo"
              />
            </div>

            <div className="text-container">
              <div className="title-container">
                <div className="title">{categoryName}</div>
                <div>
                  {/* <Tag toToggle={true} action="follow" toAction="following" /> */}
                </div>
              </div>

              {/* category decsription */}
              <div className="description">
                {description}
              </div>

              <div className="readerDetailsContainer">
                <div style={{ marginLeft: '0px' }}>
                  <FontAwesomeIcon icon={faUsers} className="icons" />
                  {/* 12,827 Followers */}
                </div>
                <div>
                  <FontAwesomeIcon icon={faNewspaper} className="icons" />
                  {/* 81 Articles */}
                </div>
                <div>
                  <FontAwesomeIcon icon={faBookReader} className="icons" />
                  {/* Unread */}
                </div>
              </div>
            </div>
          </div>
        )
        : (

          <div className="header">
            <div className="animationTextBody">
              <div className="menuWrapper">
                <div className="icon-navbar" onClick={handleLogoClick}>
                  <img
                    className="category-icon"
                    src={logoWithTxt}
                    alt="logo"
                  />
                </div>

                <div className="aboutUs">
                  {/* <div className="aboutTitle" onClick={handleClick}> About Us </div> */}
                </div>

              </div>

              {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
                <animated.div className="transitions-item" key={key} style={rest} onClick={reset}>
                  <animated.div style={{ overflow: 'hidden', height: '40px', fontSize: '40px' }}>{item}</animated.div>
                </animated.div>
              ))}
            </div>
          </div>

        )}
    </div>
  );
};

export default Header;
