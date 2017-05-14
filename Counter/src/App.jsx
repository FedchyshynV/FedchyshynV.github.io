import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';



const data = [
	{ id: 2, name: 'item'},
	{ id: 1, name: 'item'},
	{ id: 0, name: 'item'}
]

const appendItem = () => {
  data.unshift({
    id: data.length,
    name: 'item'
    
  })
  render()
}



class Counter extends React.PureComponent {
    constructor(props){
        super(props);
this.state = {
    count: 0
   
     };
this.handleClick = this.handleClick.bind(this);

    }


  handleClick() {
    let count = this.state.count + 1;
      this.setState({
      count  
    });

  };


  render() {
    return <span>
      {this.state.count}
      <button onClick={this.handleClick}  >+  </button>
     
    </span>
  }

}


const ListItem =
  ({ item }) =>
    <li>{item.id} - {item.name} - <Counter />  </li>

const renderListItem =
	(item, idx) => 
    <ListItem key={idx} item={item}  />

const List =
	({ data }) =>
  	<ul>
      {data.map(renderListItem)}
    </ul>

const ListContainer = 
	() =>
  	<div>

      1. The counter for each item has to work by pressing the "+" button in the element<br/ > 
      2. When adding a new element, the counter stores in the item that has been created
    	<List data={data}/>
      <button onClick={appendItem} >add item</button>

    </div>

  const render = 
    () =>
      ReactDOM.render(<ListContainer />, document.getElementById('container'))

  render()