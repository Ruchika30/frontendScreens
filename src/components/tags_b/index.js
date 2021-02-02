import React, { useEffect, useState } from 'react';
import style from './style.scss';

const Tag = props => {
  const {
    action, toAction, value, toToggle
  } = props;
  const [isFollowing, setFollowing] = useState(false);

  const handleFollow = () => {
    isFollowing ? setFollowing(false) : setFollowing(true);
  };

  return (
    <>
      {toToggle

        ? (
          <div
            className={isFollowing ? 'following small' : 'follow small'}
            onClick={handleFollow}
          >
            {isFollowing ? toAction : action}
          </div>
        )
        : <div className="regular">{action}</div>}
    </>
  );
};

export default Tag;
