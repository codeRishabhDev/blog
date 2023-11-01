import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 10px 20px;
  color: #fff;
`;

export const WebsiteTitle = styled(Link)`
  font-size: 24px;
  margin: 0;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.1); 
  }
`;

export const Button = styled.button`
  background-color: #ff5733;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff3019;
  }
`;
export const MenueWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
   
`;
export const NavigateLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: transform 0.2s, color 0.2s;

  &:hover {
    transform: scale(1.1); 
  }
`