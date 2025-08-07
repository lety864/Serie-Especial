import { useState, type FC} from 'react';

import Serie from "../Serie";
import BoxView from '../BoxView';
import Actions from '../Actions';

import ResultView from '../ResultView';
import styles from './ContentBox.module.scss';

const ContentBox: FC = () => {

    const [numero, setNumero] = useState<string>('');
    const [resultado, setResultado] = useState<number | null>(null);

    const calcularSerie = () => {
        const valor = Serie.calcularTermino(Number(numero));
        setResultado(valor);
    }

    return(
    <div className={styles.contentBox}>
        <BoxView 
        title='Calculo de la Serie' 
        texto='Ingresa un número natural entre 1 y 10'/>
        <Actions 
        value={numero}
        onChange={setNumero}
        onClick={calcularSerie}
        placeholder='Ingresa un numero'
        type='text'
        buttonText='Calcular Serie'
        />
        
        <div className={styles.box1}>
            {resultado !== null && (
                <ResultView 
                title='Resultado'
                texto='El Resultado es:'
                value={resultado}
                />
            )}
        </div>
    </div>
    );
};

export default ContentBox;