import "../app.css";
import { useState } from 'react';
import Showtodos from "./Listedtodos";
import { connect } from "react-redux";
import {
    addTodos,
  } from "../redux/reducer";

// const mapStateToProps = (state) => {
//     return {
//       todos: state,
//     };
//   };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       addTodo: (obj) => dispatch(addTodos(obj)),
//     //   updateTodo: (obj) => dispatch(updateTodos(obj)),
//     };
//   };


const Todocompo =(props) =>{
    const [todo, settodo] = useState('')
    // const[props.satus, setstatus] =useState()

    const onclick =() =>{
        if(todo==""){
          alert ("please enter todo value")
          return
        }
        const obj = {
          id : Math.random(),
          todovalue: todo,
          status:'active'
        }
        if(props.satus)
        {
        
        props.setstatus([...props.satus,obj])
        }
        else
        {
          props.setstatus([obj])
        }
        settodo("");
      }
      const onchange = (e)=>{
        settodo(e.target.value);
      
        }
return  (
<div className="App">
        <h1 className="title">
            Todo App
        </h1>
<div className='takeinput'>
<input
type='text'
value = {todo}
className="todo-input"
onChange={(e) => onchange(e)}
/> 
<input 
className="sub-mit"
type='button'
value = 'Add'
onClick=  { () => onclick()}
/>
{/* <Showtodos
        props.satus = {props.satus}
        setstatus = {setstatus}
        /> */}
</div>
</div>)

}

// export default connect(mapStateToProps, mapDispatchToProps)(Todocompo);
export default Todocompo;
//