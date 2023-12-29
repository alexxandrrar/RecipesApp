import React from 'react';
import { SearchInput } from 'evergreen-ui';
import { getCombinedClassName } from 'utils/helpers';

interface ISearch {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
    placeholder?: string;
    width?: string | number;
}

const Search: React.FC<ISearch> = ({
    value,
    onChange,
    disabled,
    className,
    placeholder,
    width,
}) => {
    return (
        <SearchInput
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={getCombinedClassName('search',className)}
            placeholder={placeholder}
            width={width}
        />
    );
};

export default Search;
