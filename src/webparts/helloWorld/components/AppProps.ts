export interface baseProps {
    text?: string;
    classes? : string;
}

export interface AppProps extends baseProps {
    baseProps? : baseProps
    imagePath? : string;
    serverRelativeUrl? : string;
}