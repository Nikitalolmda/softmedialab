import React from 'react'

import {Radio} from '../radioButton';

import style from './salaryType.module.css'
import {Tooltip} from '../tooltip';

interface Props {
    onRadio: any;
    currentValue: number;
}


/**
 * Salary type block with different type of payment
 *
 * @interface {Props} props - props of component
 * @returns {React.ReactElement} - rendered component
 */
export const SalaryType: React.FunctionComponent<Props> = React.memo(({
    onRadio, currentValue,
}: Props): React.ReactElement => (
    <div className={style.wrapper}>
        <Radio checked={currentValue === 1} onCheck={onRadio(1)}>
            Оклад за месяц
        </Radio>
        <div style={{display: 'flex'}}>
            <Radio checked={currentValue === 2} onCheck={onRadio(2)}>
                МРОТ
            </Radio>
            <div className={style.tooltip}>
                <Tooltip>
                    МРОТ - минимальный размер оплаты труда. Разный для разных регионов
                </Tooltip>
            </div>
        </div>
        <Radio checked={currentValue === 3} onCheck={onRadio(3)}>
            Оплата за день
        </Radio>
        <Radio checked={currentValue === 4} onCheck={onRadio(4)}>
            Оплата за час
        </Radio>
    </div>
));

SalaryType.displayName = 'SalaryType';
