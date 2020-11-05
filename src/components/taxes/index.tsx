import React from 'react';

import style from './taxes.module.css';

interface Props {
    salary: number;
    withTax: boolean;
}

/**
 * Taxes calculated block
 *
 * @interface {Props} props - props of component
 * @returns {React.ReactElement} - rendered component
 */
export const Taxes: React.FunctionComponent<Props> = React.memo(({
    salary, withTax,
}: Props): React.ReactElement => {

    const NDFL = 13;
    const salaryTax = (salary / 100) * 13;
    const salaryWithoutTax = salary - salaryTax;
    const salaryWithTax = ((salary / 87) * 100).toFixed(0);

    return (
        <div className={style.wrapper}>
            <div className={style.line}>
                <span className={style.sum}>{withTax ? salaryWithoutTax : salary} &#8381;</span> сотрудник будет получать на руки
            </div>
            <div className={style.line}>
                <span className={style.sum}>{salaryTax.toFixed(0)} &#8381;</span> НДФЛ. {NDFL}% от оклада
            </div>
            <div className={style.line}>
                <span className={style.sum}>{withTax ? salary : salaryWithTax} &#8381;</span> за сотрудника в месяц
            </div>
        </div>
    )
});
