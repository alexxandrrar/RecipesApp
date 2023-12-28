import React,{ ReactNode } from 'react';
import { Button as ButtonUI } from 'evergreen-ui';
import './styles.scss'
import { getCombinedClassName } from '../../../utils/helpers';

interface IButton {
    children: ReactNode;
    disabled?: boolean;
    className?: string;
    isLoading?: boolean;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
}

const Button: React.FC<IButton> = ({ children,disabled,className,isLoading,size,onClick }) => {
    return (
        <ButtonUI disabled={disabled} isLoading={isLoading} size={size} onClick={onClick} className={getCombinedClassName('button',className)} >
            {children}
        </ButtonUI >
    );
}

export default Button;
