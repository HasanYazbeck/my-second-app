export  class Preview {
    fileName:string;
    serverRelativeUrl:string;
    id:string;
    serverUrl:string;
    thumbnailRenderer:string;

    constructor(fileName: string , serverRelativeUrl : string,id:string ,serverUrl: string, thumbnailRenderer: string ){
        this.id = id;
        this.serverRelativeUrl = serverRelativeUrl;
        this.fileName = fileName;
        this.serverUrl = serverUrl;
        this.thumbnailRenderer = thumbnailRenderer;
    }
}