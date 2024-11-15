 export default interface INavLinkS {
    name: string;
    url: string;
    key:string;
    target:string;
}

export interface INavLinkGroup {
    name: string;
    links: INavLinkS []
}