
interface DivProps {
    children?: React.ReactNode;
    className?: string;
    id?: string;
    title?: string;
    style?: React.CSSProperties;
    dir?: string;
    lang?: string;
    security?: string;
    datatype?: string;
    onClick?:(e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseDown?:(e: React.MouseEvent<HTMLDivElement>) => void;
    onKeyDown?:(e: React.KeyboardEventHandler<HTMLDivElement>) => void;
}

export const Div: React.FC<DivProps> = ({children}) => {
  return (<>
    {children}
  </>);
}