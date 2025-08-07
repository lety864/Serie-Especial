import type { FC } from "react";

import styles from './AppView.module.scss'; 

const AppView: FC = () => {
    return(
        <div className={styles.box}>
            <div className={styles.boxIcono}>
                <img src="https://64.media.tumblr.com/98b215f7421133846a1d782975173f94/c0ebd9a768121983-a0/s400x600/7e18ae355aa1f7c5ffdf834319976e05917f1d90.gif" alt="img"/>
            </div>
            <div className={styles.boxName}>
                <p>Leticia Bermudez</p>
            </div>
            <div className={styles.boxContent}>
                <h3>Prueba Tecnica</h3>
                <p>Dada la Serie Numerica, entregar el termino <strong>n</strong>:</p>
                  <p className={styles.formula}>
                    <span className={styles.func}>serie(n)</span> = 
                    <span className={styles.func}>primo(n+1)</span> – 
                    2×<span className={styles.func}>triangular(n)</span> + 
                    <span className={styles.func}>fibonacci(n+1)</span>
                </p>
            </div>
        </div>
    );
};

export default AppView;