import React from 'react';

import styled from './radioButton.module.css';

interface Props {
    name?: string;
    value?: string;
    disabled?: boolean;
    children: React.ReactNode;
    onCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked: boolean;
}

/**
 * Radio button UI component
 *
 * @interface {Props} props - props of component
 * @returns {React.ReactElement} - rendered component
 */
export const Radio: React.FunctionComponent<Props> = React.memo(({
    name,
    value,
    disabled = false,
    checked= false,
    children,
    onCheck,
}: Props): React.ReactElement => (
        <label className={styled.radio}>
            <input checked={checked} value={value} disabled={disabled} name={name} onChange={onCheck} type="radio" />
            <span className={styled.text}>{children}</span>
        </label>
));

Radio.displayName = 'Radio';