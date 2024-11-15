import { TitleProps } from "../Props/TitleProps";
// import styles  from "../../styles/Components.module.scss";

export default function TitleComponent({baseProps} : TitleProps): JSX.Element  {
  return (
    <h1 className={`${baseProps.classes}`}>{baseProps.text}</h1>
  )
}
