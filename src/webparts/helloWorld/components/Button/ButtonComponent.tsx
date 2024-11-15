import {ButtonProps} from '../Props/ButtonProps';
import styles from '../../styles/Components.module.scss';

export default function ButtonComponent({text = "Button" ,classes ,type , style, icon , val ,onClick}: ButtonProps) : JSX.Element{

  const alertMissingHandler = () : void => window.alert('Add Event Handler to the Button');

  return (
   <button className={`${styles.btn} ${classes}`} 
           onClick={onClick ? onClick : alertMissingHandler} 
           type={type} 
           style={style}
           value={val}>

      <div className={`${styles.dFlex}`}> 
            {icon && icon}
            {text ? text : "Click"}
      </div>
    </button>
  )
}
