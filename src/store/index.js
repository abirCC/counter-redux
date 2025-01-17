import {createStore} from "redux";

const INITIAL_VALUE ={
  counter : 0,
  privacy : false,
};
const counterReducer = (store = INITIAL_VALUE,action) => {
  if(action.type === 'INCREMENT'){
    return {...store,counter: store.counter+1}
  }else if(action.type === 'DECREMENT'){
    return {...store,counter: store.counter-1}
  }else if(action.type === 'PRIVACY'){
    return {...store,privacy: !store.privacy}
  }else if(action.type === 'ADD'){
    return {...store,counter: store.counter + Number(action.payload.num) }
  }else if(action.type === 'SUBS'){
    return {...store,counter: store.counter - Number(action.payload.num)}
  }
  else{

  }
  console.log("Action Received", action);
  return store;
}
const counterStore = createStore(counterReducer);


export default counterStore;