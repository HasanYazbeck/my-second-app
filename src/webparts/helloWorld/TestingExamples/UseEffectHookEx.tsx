import {useState , useEffect} from 'react';

// Components
import ButtonComponent from '../components/Button/ButtonComponent';


export default function UseEffectHook() : JSX.Element{

    const [count, setCount] = useState(0);
    const [text,setText] = useState(0);
    const [fadeIn, setFadeIn] = useState('');

 
    useEffect(() : void =>{
        setText(text+3);
        fadeIn === '' && setFadeIn('fade');
      },[count]);
 
    const setCountClicked = () => { 
      setCount(count + 1);
      setFadeIn('');
    }

  return (
    <div style={{height: "40vh"}}>
      <h1 className='title'>UseEffecHook</h1>
      <h2 className='subtitle'>{`You clicked ${text} times`}</h2>
      <p className={`card card-warning bg-danger text-light p-1 ${fadeIn}`}> You Clicked {count}
        <ButtonComponent onClick={setCountClicked} text='Click'/>
      </p>
    </div>
  );
}
