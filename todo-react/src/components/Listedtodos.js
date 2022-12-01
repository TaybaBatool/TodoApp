import "../app.css"
import { useState } from 'react';
// import { connect } from "react-redux";
// import {
//     addTodos,

//   } from "../redux/reducer";

// const mapStateToProps = (state) => {
//     return {
//       todos: state,
//     };
//   };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       updateTodo: (obj) => dispatch(updateTodos(obj))
//     };
//   };

const Showtodos = (props) => {

    const [screen_state, setscreenstate] = useState('active');
  
    const completed = (status) =>{
      setscreenstate(status) 
    }
 
    const update = (id, e) => {
        if(e.which === 13)
        {
            e.preventDefault();
            const updated_list = props.satus.map(item => {
                if(item.id ==id)
                {
                  item.todovalue = e.target.value
                }
                return item;
              });
              props.setstatus(updated_list)
              
        }
            
        return;
    }
    
    const changestatus =(id, status) =>{
        const updated_list = props.satus.map(item => {
          if(item.id ==id)
          {
            item.status = status
          }
          return item;
        });
        props.setstatus(updated_list)
      }

    return (
    <div id="row-rev" class="content">
        <div className='todos'>
          <input 
          type = 'button'
          className='to-dos'
          value = "Todos"
          onClick={() =>completed ('active')}
          />
        </div>
        <div className='Completed'>
          <input 
          type='button'
          value = "Completed"
          className='com-pleted'
          onClick ={ () => completed('compelted')}
          />
        </div>
        <div className='Deleted'>
          <input 
          type='button'
          value = "Deleted"
          className='de-leted'
          onClick ={ () => completed('deleted')}
          />
          { props.satus && props.satus.length > 0  ? props.satus.filter(item => item.status == screen_state).map((item) => {
                return (
                 <div className="cls-card">
                  <textarea
                  key={item.id}
        defaultValue={item.todovalue}
        onKeyPress={(e) => update(item.id, e)}
      />
      {screen_state == 'active'  ? 
       <><div className='complete'>
                                <input
                                    type='button'
                                    className='comp-btn'
                                    value='complete'
                                    onClick={() => changestatus(item.id, 'compelted')} />
                            </div><div className='delete'>
                                    <input
                                        type='button'
                                        className='del-btn'
                                        value='delete'
                                        onClick={() => changestatus(item.id, 'deleted')} />

                                </div>
                                                        </>
     
     : null
      
       }
     
        </div>
                );
              })
            : null}
        </div>
        </div>
)}
// export default connect(mapStateToProps, mapDispatchToProps)(Showtodos);
export default Showtodos;