import styled from 'styled-components';

export const Card = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.1s;
  max-width: 300px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

export const Author = styled.p`
  color: #555;
  font-size: 0.8rem;
  margin: 8px 0;
  margin-left: 10px;
`;

export const Date = styled.p`
  color: #777;
  font-size: 0.8rem;
`;

export const Content = styled.p`
  font-size: 1rem;
  margin-top: 12px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 440px;
  height: auto;
  object-fit: cover; 
`;

export const ContantWrapper = styled.div`
  padding: 15px;
`

export const UserWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
`