import React from 'react';
import { HeaderWrapper, WebsiteTitle, MenueWrapper, NavigateLink } from './HeaderStyle';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <WebsiteTitle to="/">
        Blog
      </WebsiteTitle>
      <MenueWrapper>
        <NavigateLink to="/signin">Sign in</NavigateLink>
        <NavigateLink to="/signup">Sign up</NavigateLink>
      </MenueWrapper>
    </HeaderWrapper>
  );
};

export default Header;