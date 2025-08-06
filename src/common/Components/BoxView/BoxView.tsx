import type { FC } from "react";

import type { ViewProps } from "../../utils/types/types";

import styles from './BoxView.module.scss'

const BoxView : FC<ViewProps> =({
    title,
    texto
}) =>{
    return(
        <>
        <h2>{title}</h2>
        <div className={styles.box1}>
            {texto}
        </div>
        </>
    )
}

export default BoxView