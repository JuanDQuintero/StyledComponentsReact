interface ButtonProps {
    children?: React.ReactNode;
    id?: string;
    className?: string;
    title?: string;
    style?: React.CSSProperties;
    value?:  string | number | readonly string[];
    type?: "button" | "reset" | "submit";
    disabled?: boolean
    name?: string;
    onClick?:(e: React.MouseEvent<HTMLButtonElement>) => void;
    onDoubleClick?:(e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({children}) => {
    return (<>
    {children}
    </>);
}