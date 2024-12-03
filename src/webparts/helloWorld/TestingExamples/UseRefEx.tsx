import { useRef } from 'react';
import styles from '../styles/Components.module.scss';

export default function UseRefEx(): JSX.Element {
    const inputRef = useRef<HTMLInputElement>(null);

    const focus = (): void => {

        if (inputRef.current) {
            console.log('focus');
            inputRef.current.focus();
        }
    }
  return (
    <div style={{height: '100vh' }}>
        <h1 className={`${styles.title}`}>UseRefEx</h1>
        <div className={`${styles.formGroup}`}>
            <input type="text" ref={inputRef}/>
        </div>
        <button className={`${styles.btn}`} onClick={focus}>Login</button>
        </div>
  )
}
