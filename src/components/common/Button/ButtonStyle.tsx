import styled from 'styled-components';

interface CustomButtonProps {
  color: string;
  width: string;
}

const CustomButton = styled.button<CustomButtonProps>`
  height: 100%;
  width: ${props => props.width};
  border: none;
  font-size: 16px;
  font-weight: 400;
  border-radius: 6px;
  background-color: ${props => props.color};
  color: #fff;
  padding: 13px 20px;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    background-color: #ff3019;
  }
`;

export default CustomButton;