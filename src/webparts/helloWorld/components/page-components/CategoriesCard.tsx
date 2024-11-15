
/* Styles */
import styles from '../../styles/Components.module.scss';

/* Props */
import { CardProps } from "../Props/CardProps";

/* Components */
import ButtonComponent from '../Button/ButtonComponent';

export default function CategoriesCard(
    {  title, 
        text, 
        children, 
        icon_1, 
        icon_2, 
        icon_3, 
        btnIcon, 
        cardHeader = true, 
        cardFooter = true,
        cardBody = true,
        startEvent} : CardProps ) : JSX.Element {

  return (
      <div className={`${styles.card} ${styles.maxWidth400}`}>
        {cardHeader && (
            <div className={`${styles.cardHeader}`}> 
                {icon_1} 
                {icon_2} 
                {icon_3} 
            </div>
        )}

        {cardBody && (
            <div className={`${styles.cardBody}`}>
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
