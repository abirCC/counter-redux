import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => { 
  const dispatch = useDispatch();
  const inputElement = useRef();
  const handleIncrement = () => {
    dispatch({type:"INCREMENT"});
  }
  const handleDecrement = () => {
    dispatch({type:"DECREMENT"});
  }
  const counterPrivacyToggle = () => {
    dispatch({type:"PRIVACY"});
  }
  const handleAdd = () => {
    dispatch(
      {
      type:"ADD",
      payload:{
       num: inputElement.current.value
      }
    }
  );
  inputElement.current.value = "";
  }
  const handleSubs = () => {
    dispatch(
      {
      type:"SUBS",
      payload:{
       num: inputElement.current.value
      }
    }
  );
  inputElement.current.value = "";
  }
return (
  <>
  <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center btn-container">
    <button type="button" className="btn btn-primary" onClick={handleIncrement}>+1</button>
    <button type="button" className="btn btn-success" onClick={handleDecrement}>-1</button>
    <button type="button" className="btn btn-warning" onClick={counterPrivacyToggle}>Privacy Toggle</button>
  </div>
  <div classNameName="d-grid gap-2 d-sm-flex justify-content-sm-center btn-container2">
    <input type="text" placeholder="Enter Number" className="number-input" 
    ref={inputElement}/>
  <button type="button" className="btn btn-info" onClick={handleAdd}>ADD</button>
  <button type="button" className="btn btn-danger" onClick={handleSubs}>SUBSTRACT</button>
  </div>
</>
);
}
export default Controls