export type ModalProps = {
    title? : string;
    text? : string;
    loginEvent?: React.MouseEventHandler<HTMLButtonElement>;
    cancelEvent?: React.MouseEventHandler<HTMLButtonElement>;
}