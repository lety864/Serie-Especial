import type { FC } from "react"

import type { ResultProps } from "../../utils/types/types";

const ResultView: FC<ResultProps> = ({
    title,
    texto,
    value,
}) => {

    return(
        <>
        <h3>{title}</h3>
        <p>{texto}<strong>{value}</strong></p>
        </>
    );
};

export default ResultView