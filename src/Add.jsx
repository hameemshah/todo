const Add = (props) => (
    <div className='add'>
    <input type="text" onChange={props.handleChange} name="insert" id="addItemInput" autoFocus value={props.item} />
    <button onClick={props.addItem} className='btn'>Add</button>
  </div>
);

export default Add;