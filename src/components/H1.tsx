interface H1Props {
    children?: React.ReactNode;
    className?: string;
    id?: string;
    title?: string;
    style?: React.CSSProperties;
    dir?: string;
}

export const H1: React.FC<H1Props> = ({children}) => {
    return (<>
    {children}
    </>);
}