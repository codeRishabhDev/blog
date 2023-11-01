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
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

export const Author = styled.p`
  color: #555;
  font-size: 0.8rem;
  margin: 8px 0;
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
