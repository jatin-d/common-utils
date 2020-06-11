import React from 'react';
import List from './List'
import './ToDo.css'
import Axios from 'axios';
import Popup from './Share'

import { 
  BrowserRouter,
  Switch,
  Route,
  // Link,
  Redirect,
} from 'react-router-dom'

class ToDo extends React.Component {
  state = {
    categories: [],
    id: ""
  }

  addCategory = e => {
    e.preventDefault();
    if(this.input.value){
      var updatedState = [...this.state.categories, {categoryName:this.input.value, listItems: []}]
    }
    this.createToDo(updatedState)
  }

  addListItem = e => {
    e.preventDefault();
    let id = this.state.id
    let newItem = {itemName: e.target.item.value, isChecked: false}
    this.patchToDo(newItem, id)
  }

  handleCheckbox = e => {
    console.log("STATE "+JSON.stringify(this.state))
    console.log("ETN "+e.target.name)
    console.log("ETN ID "+e.target.id)
    let id = this.state.id
    let filteredItemArr = this.state.categories[0].listItems.filter( item => item.itemName === e.target.id)
    console.log(filteredItemArr)
    let filteredItem = filteredItemArr[0]
    filteredItem.isChecked = !filteredItem.isChecked;
    this.patchToDo(filteredItem, id)
  }

  createToDo = (categories) => {
    Axios({
      method: 'post',
      url: 'https://fierce-fortress-81906.herokuapp.com/todo',
      data: {
        categories
      }
    }).then(response => {
      this.setState({
        categories: response.data.data.categories,
        id: response.data.id
      })
    })
  }

  patchToDo = (item, id) => {
    Axios({
      method: 'patch',
      url: `https://fierce-fortress-81906.herokuapp.com/todo/${id}`,
      data: {
         item
      }
    }).then(response => {
      this.setState({
        categories: response.data.categories
      })
    })
  }
  
  fetchStateFromId = id => {
    Axios({
      method: 'get',
      url: `https://fierce-fortress-81906.herokuapp.com/todo/${id}`,
    }).then(response => {
      this.setState({
        categories: response.data.categories,
        id: id
      })
    })
  }

  render(){
    if (!this.state.id && this.state.categories.length === 0){
      let id = window.location.pathname.split('/')[2]
      if(id)
        this.fetchStateFromId(id) 
    }
    let idSt = this.state.id
    let todoIdUrl = `/todo/${idSt}`
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/todo/:id">
            {this.state.categories.map(category => {
              return <List addListItem={this.addListItem} handleCheckbox={this.handleCheckbox} category = {category} />
            })}
            <div>
              <Popup />
              <button onClick={()=>{window.location.reload()}}>Relode</button>
            </div> 
          </Route>
          <Route path="/">
            {idSt ? <Redirect to={todoIdUrl} /> : <Redirect to="/"/>}
            <div id="toDoWrapper" className="toDoWrapper">
              <div className="addCatWrapper">
                <form onSubmit={this.addCategory} action="">
                  <input ref={(input) => this.input = input}
                          type="text" 
                          name="category" 
                  />
                    <input type="submit" 
                          value="New List" 
                    />
                </form>
              </div>         
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }  
}

export default ToDo;