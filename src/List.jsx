import logo from "./assets/del.svg"
const List = (props) => (
    <div className='items'>
    <ul>
      {props.items.map((i, itr)=> <li key={itr}><span>{itr+1}</span>{i} <img src={logo} onClick={() => props.del(itr)} /> </li>)}
    </ul>
  </div>
);

export default List;