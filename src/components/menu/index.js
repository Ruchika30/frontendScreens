import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { useHistory } from 'react-router-dom';

export default props => {
  const history = useHistory();

  const onClickBlog = () => {
    history.push('/blog');
  };

  const onClickHome = () => {
    history.push('/');
  };

  return (
  // Pass on our props

    <Menu {...props}>
      <a className="menu-item" onClick={onClickHome}>
        Home
      </a>
      <a className="menu-item" onClick={onClickBlog}>
        Blog
      </a>
      <a className="menu-item" href="/sectors">
        Careers
      </a>

    </Menu>
  );
};
