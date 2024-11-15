import {CardProps} from '../Props/CardProps';
import {useRef, useEffect} from 'react';
import styles from '../../styles/Components.module.scss';
import ButtonComponent from '../Button/ButtonComponent';

export default function Card({ 
    title, 
    text, 
    children, 
    icon_1, 
    icon_2, 
    icon_3, 
    btnIcon, 
    cardHeader = true, 
    cardFooter = true,
    cardBody = true,
    startEvent,
    backgroundColor }: CardProps): JSX.Element{

   const cardRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
    if(cardRef.current && backgroundColor){
        cardRef.current.style.background = backgroundColor;
    }
   }, [backgroundColor]);

    return (
    <div className={`${styles.card} ${styles.maxWidth400}`} ref={cardRef}>
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
    );
}