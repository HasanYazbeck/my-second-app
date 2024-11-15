import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UseStateHookEx() : JSX.Element{

  const [count, setCount] = useState(0);
  
  // const onClickHandler = (event : React.MouseEvent<HTMLButtonElement> ) : void => {
  //   console.log(event.currentTarget.value);
  // };

  return (
    <div>
      <h1> UseStateHookEx</h1>
      <button className="btn" onClick={() => setCount(count + 1) }>
        +
      </button>

      <span>Your Number is {count}</span>

      <button className="btn" onClick={() => setCount(count - 1)}>
        -
      </button>
    </div>
  )
}
