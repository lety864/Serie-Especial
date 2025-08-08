import { useState, type FC} from 'react';

import BoxView from '../BoxView';
import Actions from '../Actions';
import ResultView from '../ResultView';
import Serie from '../../utils/Serie/Serie';

import styles from './ContentBox.module.scss';

const ContentBox: FC = () => {

    const [numero, setNumero] = useState<string>('');
    const [resultado, setResultado] = useState<number | null |string>(null);
    const [msg, setmsg] = useState<string>('');

    const calcularSerie = () => {
        if(Number(numero) <= 10){
            const valor = Serie.calcularTermino(Number(numero));
            setResultado(valor);
            setmsg('El Resultado es: ');
        }else{
            setmsg('Numero no valido');
            setResultado('');
        }
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
        buttonText='Calcular n'
        />
        
        <div className={styles.box1}>
            {resultado !== null && (
                <ResultView 
                title='Resultado'
                texto={msg}
                value={resultado}
                />
            )}
        </div>
    </div>
    );
};

export default ContentBox;