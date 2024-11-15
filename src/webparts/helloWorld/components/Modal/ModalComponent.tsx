// Props
import { ModalProps } from "../Props/ModalProps";

// Styles
import styles from "../../styles/Components.module.scss";
import ButtonComponent from "../Button/ButtonComponent";

export default function ModalComponent({title , text , loginEvent , cancelEvent} : ModalProps) : JSX.Element {
  return (
    <div className={styles.modal}> 
        <div className= {`${styles.modalContent} fadeIn-2ms`}>
            <h1 className={`${styles.mb1}`}>{title ? title : "Modal Title"}</h1>
            <p className={`${styles.mb1}`}>{text ? text : "Modal content goes here"}</p>
            <ButtonComponent text={"Login"} classes={`${styles.btnPrimary}`} onClick={loginEvent}/>
            <ButtonComponent text={"Close"} classes={``} onClick={cancelEvent}/>
          </div>
    </div>
  )
}
