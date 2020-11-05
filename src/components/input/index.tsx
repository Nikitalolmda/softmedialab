import React from 'react';

import style from './input.module.css';

interface Props {
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input UI component
 *
 * @interface {Props} props - props of component
 * @returns {React.ReactElement} - rendered component
 */
export const Input: React.FunctionComponent<Props> = React.memo(({
    value,
    placeholder,
    onChange,
}: Props): React.ReactElement => (
    <input
        className={style.input}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type="text"
    />
));

Input.displayName = 'Input';
