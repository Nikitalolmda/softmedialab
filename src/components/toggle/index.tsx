import React from 'react';

import style from './toggle.module.css';

interface Props {
    textOn: string;
    textOff: string;
    onChange: (event: React.ChangeEvent<HTMLElement>) => void;
    isChecked: boolean;
}

/**
 * Toggle UI component
 *
 * @interface {Props} props - props of component
 * @returns {React.ReactElement} - rendered component
 */
export const Toggle: React.FunctionComponent<Props> = React.memo(({
    textOff, textOn, onChange, isChecked,
}: Props): React.ReactElement => {

    return (
        <label className={style.label}>
            {textOn &&
                <span className={`${style.text} ${!isChecked && style.disabled}`}>{textOn}</span>}
            <input className={style.input} type="checkbox" onChange={onChange} />
            <div className={`${style.toggle} ${isChecked && style.checked} ${isChecked && style.disabled}`} />
            {textOff &&
                <span className={`${style.text} ${isChecked && style.disabled}`}>{textOff}</span>}
        </label>
    )
});

Toggle.displayName = 'Toggle';
