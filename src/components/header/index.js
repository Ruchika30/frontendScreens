/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, {
  useCallback, useEffect, useRef, useState
} from 'react';
import style from './style';
import { render } from 'react-dom';
import { animated, useTransition } from 'react-spring';
import './animationStyle.css';
import { useHistory } from 'react-router-dom';

const Header = props => {
  const { main, categoryName, description } = props;
  const [isFollowing, setFollowing] = useState(false);
  const history = useHistory();

  const ref = useRef([]);
  const [items, set] = useState([]);

  const {
    header, menuWrapper, iconContainer, animationTextBody, aboutUs, transitionsItem
  } = style;

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
  const third = 'How your Future Career looks like!';

  const reset = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set([first, second, third]), 2000));
    ref.current.push(setTimeout(() => set([first, third]), 5000));
    ref.current.push(setTimeout(() => set([first, second, third]), 8000));
  }, []);

  useEffect(() => void reset(), [reset]);

  const handleClick = () => {
    history.push('/about');
  };

  return (

    <div css={header}>
      <div css={animationTextBody}>
        <div css={menuWrapper}>
          {/* <div css={a}>
                        <img
                            css="category-icon"
                            // src={logoHorizontal}
                            alt="logo"
                        />
                    </div> */}
        </div>

        {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
          <animated.div css={transitionsItem} key={key} style={rest} onClick={reset}>
            <animated.div style={{ overflow: 'hidden', height: '40px', fontSize: '40px' }}>{item}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Header;
