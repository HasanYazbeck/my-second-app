import styles from "../../styles/Components.module.scss";
import ButtonComponent from "../Button/ButtonComponent";
import {CardProps} from '../Props/CardProps';

export default function OfferCard(
    {title, text, children, icon_1, icon_2, icon_3, btnIcon, startEvent,cardHeader = true, cardFooter = false,cardBody = true} 
    : CardProps) : JSX.Element{
  return (
    <div className={`${styles.card} offer ${styles.textCenter} ${styles.maxWidth400}`}>
    {cardHeader && (
        <div className={`${styles.cardHeader} bg-transparent`}> 
            {icon_2} 
            {icon_3} 
        </div>
    )}

    {cardBody && (
        <div className={`${styles.cardBody}`}>
             {icon_1} 
            <h3 className={`${styles.cardTitle}`}>{title ? title : "Card Title"}</h3>
            <p className={`${styles.cardText}`}>{text} {children}</p>
        </div>
    )}
   
    {cardFooter && (
            <div className={`${styles.cardFooter}`}>
                <ButtonComponent classes={`${styles.btnSecondary}`} text={"Start Learning"} icon={btnIcon} onClick={startEvent}/>
            </div> )
    }
</div>
  )
}
