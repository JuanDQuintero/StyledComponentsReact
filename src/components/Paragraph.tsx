interface ParagraphProps {
    children?: React.ReactNode;
    className?: string;
    id?: string;
    title?: string;
    style?: React.CSSProperties;
    dir?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({children}) => {
    return (<>
    {children}
    </>);
}