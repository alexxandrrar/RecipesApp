import React from 'react';
import { TextInput } from 'evergreen-ui';
import { getCombinedClassName } from 'utils/helpers';
import './styles.scss';

interface IInput {
    value: string;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    width?: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({
    value,
    onChange,
    disabled,
    className,
    placeholder,
    width
}) => {
    return (
        <TextInput
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={getCombinedClassName('input',className)}
            placeholder={placeholder}
            width={width}
        />
    );
};

export default Input;
