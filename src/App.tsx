import React from 'react';

import {SalaryType} from './components/salaryType';
import {Input} from './components/input';
import {Taxes} from './components/taxes';
import {Toggle} from './components/toggle';

import style from './app.module.css';

interface State {
    value: string;
    type: number;
    isChecked: boolean;
}

/**
 * Main component-wrapper for app
 */
export class App extends React.PureComponent<{}, State> {
    state = {
        value: '',
        type: 1,
        isChecked: false,
    };

    /**
     * Input handler
     *
     * @param {React.ChangeEvent<HTMLInputElement>} event - current event
     */
    onInputHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({value: event.target.value.replace(/\D+/, '')})
    };

    /**
     * On radio button handler
     *
     * @param {number} id - id of radio button
     * @returns {() => void} - returns function to update state
     */
    onRadioHandler = (id: number): () => void => (): void => {
        this.setState({type: id});
    };

    /**
     * On toggle handler
     *
     * @param {React.ChangeEvent<HTMLElement>} event - current event
     */
    toggleHandler = (event: React.ChangeEvent<HTMLElement>): void => {
        const target = event.target as HTMLInputElement;
        this.setState({isChecked: target.checked})
    };

    /**
     * Render component
     *
     * @returns {React.ReactElement} - component
     */
    render(): React.ReactElement {
        const {value, type, isChecked} = this.state;

        return (
            <div className={style.app}>
                <div className={style.title}>Сумма</div>
                <div className={style.container}>
                    <SalaryType currentValue={type} onRadio={this.onRadioHandler} />
                    <div className={style.toggleWrapper}>
                        <Toggle isChecked={isChecked} onChange={this.toggleHandler} textOn="Указать с НДФЛ" textOff="Без НДФЛ" />
                    </div>
                    <div className={style.inputWrapper}>
                        <Input value={value} placeholder='' onChange={this.onInputHandler} />
                        <span className={style.ruble}>
                            &#8381; {type === 3 && 'в день'} {type === 4 && 'в час'}
                        </span>
                    </div>
                    {type === 1 && value && <Taxes withTax={isChecked} salary={Number(value)} />}
                </div>
            </div>
        )
    }
}
