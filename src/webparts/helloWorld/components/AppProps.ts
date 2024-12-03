import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface baseProps {
    text?: string;
    classes? : string;
}

export interface AppProps extends baseProps {
    baseProps? : baseProps
    imagePath? : string;
    serverRelativeUrl? : string;
    webContext:WebPartContext;

}