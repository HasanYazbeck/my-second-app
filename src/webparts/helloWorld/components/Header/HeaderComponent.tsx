
import {HeaderProps} from '../Props/HeaderProps';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Components.module.scss';

export default function HeaderComponent({childrens }: HeaderProps) : JSX.Element{

  return (
    <header className={`${styles.header} ${styles.dFlex}`}>
      <div className={`${styles.headerContent} ${styles.mb2}`}>
        {childrens}
      </div>
    </header>
  )
}
