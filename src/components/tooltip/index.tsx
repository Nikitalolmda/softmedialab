import React, {useState} from 'react';

import style from './tooltip.module.css';

import icon from '../../images/info.svg';
import close from '../../images/close.svg';

interface Props {
    children: React.ReactNode;
}

/**
 * Tooltip UI component
 *
 * @interface {Props} props - props of component
 * @returns {React.ReactElement} - rendered component
 */
export const Tooltip: React.FunctionComponent<Props> = React.memo(({
    children
}: Props): React.ReactElement => {
    const [isOpen, openTooltip] = useState(false);

    /**
     * Handler to open/close tooltip
     */
    const toggleTooltip = (): void => {
        openTooltip(!isOpen)
    };

    return (
        <div className={style.tooltipWrapper}>
            <div className={style.icon}>
                {isOpen ?
                    <img src={close} alt="close" onClick={toggleTooltip} /> : <img src={icon} alt="information" onMouseEnter={toggleTooltip}/>}
            </div>
            {isOpen && <div className={style.content}>{children}</div>}
        </div>
    )
});

Tooltip.displayName = 'Tooltip';
