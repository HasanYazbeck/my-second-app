export type CardProps = {
    title?:string;
    text?:string;
    children?: React.ReactNode
    icon_1?:React.ReactNode;
    icon_2?:React.ReactNode;
    icon_3?:React.ReactNode;
    btnIcon?:React.ReactNode;
    cardHeader?: boolean,
    cardBody?:boolean,
    cardFooter?: boolean,
    backgroundColor? : string;
    startEvent?: (event:React.MouseEvent<HTMLButtonElement>) => void ;
}