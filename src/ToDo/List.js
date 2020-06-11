import React from 'react';
import './List.css'
import ListItem from './ListItems';


function List (props){
  console.log(props)
  return (
      <div id="ListWrapper" className="ListWrapper">
          <h4>{props.category.categoryName}</h4>
          <div className="addItemsWrapper">
          <form onSubmit={props.addListItem} id={props.category.categoryName} action="" >
              <input type="text"
                      name="item"/>
              <input className="submitBtn" type="submit" 
                      value="+" />
          </form>
          </div>
          <div>
            {props.category.listItems.map(item => {
                return <ListItem handleCheckbox = {props.handleCheckbox} item={item} categoryId={props.category.categoryName} />
            })}
          </div>
      </div>
  )
}

export default List;