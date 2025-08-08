export type ResultProps = {
    title: string;
    texto: string;
    value: number | string;
}

export type InputButtonProps = {
    value : string | number;
    onChange: (value: string) => void;
    onClick: () => void;
    placeholder? :string;
    type?: string;
    buttonText? : string;
    inputClassName?: string;
    buttonClassName?: string;
}

export type ViewProps = {
    title : string;
    texto : string;
}
