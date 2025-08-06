import type { FC } from "react";

import type { InputButtonProps } from "../../utils/types/types";

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
        <>
        <input 
        type={type} 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClassName}
        />
        <button 
        onClick={onClick}
        className={buttonClassName}
        >
            {buttonText}
        </button>
        </>
    );
};

export default Actions;