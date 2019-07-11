import React from 'react'
import Header from './Header.js'
import ToDoItem from './todoDisplay.js'
import todosData from '../tododata.js'

class App extends React.Component{

  constructor()
  {
    super()
    this.state = {
      edit:false,
      todoitem:todosData
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleedit = this.handleedit.bind(this)
  }
  handleChange(id)
  {
    this.setState(prevState => {
              const updatedTodos = prevState.todoitem.map(todo => {
                  if (todo.id === id) {
                      todo.completed = !todo.completed
                  }
                  return todo
              })
              return {
                  todoitem: updatedTodos
              }
          })
  }
  handleAdd(event)
  {
    console.log(event)
    if(event.target.item.value!=="")
    {
      this.setState(
        {
          todoitem:[...todosData,{id:Date.now(),text:event.target.item.value,completed:false}]
        }
      )
    }
    event.target.item.value="";
    event.preventDefault();
  }
  handleDelete(id)
  {

    this.setState(item => {

    const deleted = item.todoitem.filter(
        todo=>{
          if(todo.id!=id)
          {
            return todo
          }
        })
      return  {
          todoitem:deleted
        }
    })

  }
  handleedit(id,text)
  {
      this.setState({
        edit:true,
        id:arguments[0],
        text:arguments[1]
      })
  }
  renderEditForm()
  {

    if (this.state.edit) {
      return <form>
        <input type="text" name="updatedItem" className="item" defaultValue={this.state.text} />
        <button className="update-add-item">Update</button>
      </form>
    }

  }
  render()
  {
const todo = this.state.todoitem.map((item) => <ToDoItem key={item.id} edit="false" item={item} handleChange={this.handleChange} handleDelete = {this.handleDelete} handleedit = {this.handleedit}/>)
return (
      <div>
        <Header/>
          <form style={{textAlign:'center'}} onSubmit={this.handleAdd}>
            <input type="text" name = "item"/>
            <button>Add</button>
          </form>
         <div className="todo-list">
         {this.renderEditForm()}
          {todo}
          </div>
      </div>
    )
  }


}

export default App
