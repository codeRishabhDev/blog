import React from 'react';
import CustomButton from './ButtonStyle';

interface CustomButtonProps {
    name: string,
    type: string,
    color?: string;
    width?: string;
    onClick?: () => void;
}

const Button: React.FC<CustomButtonProps> = ({ name, type, color = "#007bff", width = "100%", onClick}) => {
    return (
        <CustomButton color={color} width={width} onClick={onClick}>
            {name}
        </CustomButton>
    )
}

export default Button;