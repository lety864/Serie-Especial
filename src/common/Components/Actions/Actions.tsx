import type { FC } from "react";

import type { InputButtonProps } from "../../utils/types/types";

import styles from './Actions.module.scss'

const Actions: FC<InputButtonProps> = ({
    value,
    onChange,
    onClick,
    placeholder = 'Escribe un numero',
    type = 'text',
    buttonText = 'Calcular',
    inputClassName = '',
    buttonClassName = '',
}) =>{

    return(
        <div className={styles.box}>
            <div className={styles.inputBox}>
                <input 
                type={type} 
                value={value} 
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className={inputClassName}
                />
            </div>
            <div className={styles.buttonBox}>
                <button 
                onClick={onClick}
                className={buttonClassName}
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};

export default Actions;