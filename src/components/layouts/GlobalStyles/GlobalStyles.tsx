import React from 'react';
import './GlobalStyles.css';

interface GlobalStylesProps {
    children: React.ReactNode;
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({ children }) => {
    return <>{children}</>;
};

export default GlobalStyles;
