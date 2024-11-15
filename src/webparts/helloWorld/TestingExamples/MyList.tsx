
export default function MyList(): JSX.Element {

  const items = ["item1" , "item2" , "item3" , "item4"];

  return (
    <div><h1 className="title">My List</h1>
    <ul>
      {items.map((item,index) => {
        return <li key={index}>{item}</li>;
      })}
        </ul>
      </div>
  )
}
