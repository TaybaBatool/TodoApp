import "./app.css";
import { useState } from 'react';
import Todocompo from "./components/addtodos";
import Showtodos from "./components/Listedtodos";
// import {addTodos} from "./redux/reducer"
// import { connect } from "react-redux";

// const mapStateToProps = (state) => {
//   return {
//     todos: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addTodo: (obj) => dispatch(addTodos(obj)),
//   //   updateTodo: (obj) => dispatch(updateTodos(obj)),
//   };
// };

function App() {
  const[satus, setstatus] =useState()
  
      return (
    <div className="App">
        <Todocompo 
         satus = {satus}
         setstatus = {setstatus}/>
        <Showtodos
        satus = {satus}
        setstatus = {setstatus}
        />
    </div>
);

}
export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);