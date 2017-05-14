import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import items from './items';


function Header(props){
    return(
        <header>
        <Stats items={props.items} />
            <h1> {props.title} </h1> 
        </header>
    );
}

Header.PropTypes = {
    title: React.PropTypes.string.isRequired,
    items: React.PropTypes.array.isRequired
};


        
class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        let title = this.state.title;

        if(title){
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
    }
      componentDidMount(){
    this.nameInput.focus();
  }

    handleChange(event){
        let title = event.target.value;

        this.setState({ title });
    }

    render(){
        return (
            <form className="todo-form" onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.title}
                   ref={input => input && input.focus()}
                    placeholder="Что нужно сделать?"
                    onChange={this.handleChange}
                     />
                
                <Button type="submit" >Добавить </Button>

            </form>
        );
    }

}

Form.propTypes = {
    onAdd: React.PropTypes.func.isRequired
};

function Todo(props){

    return(
            <div className={`todo${props.completed ? ' completed' : ''}`}>
                <Checkbox checked={props.completed} onChange={() => props.onStatusChange(props.id)} />

                <span className="todo-title">{props.title}</span>
                
                <Button className="delete icon" icon="delete" onClick={() => props.onDelete(props.id)} />

            </div>

    );
}

Todo.PropTypes = {
    title: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
};

function Checkbox(props){

    return(
                <button className="checkbox icon" onClick={props.onChange}>
                    <i className="material-icons">{props.checked ? 'check_box' : 'check_box_outline_blank'}</i>
                </button>
    );
  }


Checkbox.propTypes = {
    checked: React.PropTypes.bool.isRequired,
    onChange: React.PropTypes.func.isRequired
};

function Button(props){
    return(
               <button className={props.className} onClick={ props.onClick} {...props}>
               {props.icon ?
                    <i className="material-icons">{props.icon}</i>
                    :
                    props.children
                    }
                </button>
    );
}

Button.PropTypes = {
    className: React.PropTypes.string,
    Button: React.PropTypes.string,
    onClick: React.PropTypes.func,
    children: React.PropTypes.node
};


function Stats(props){

    let total = props.items.length;
    let completed = props.items.filter(todo => todo.completed).length;
    let notcompleted = total - completed;

    return(
        <table className="stats">
            <tbody>
                <tr>
                    <th>Всего задач:</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Выполнено:</th>
                    <td>{completed}</td>
                </tr>
                <tr>
                    <th>Осталось:</th>
                    <td>{notcompleted}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.PropTypes = {
      items: React.PropTypes.array.isRequired
};



class TodoApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            items: this.props.initialData
        };
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    nextId(){
        this._nextId = this._nextId || 5;
        return this._nextId++;
    }

    handleStatusChange(id){
        let items = this.state.items.map(todo =>{
            if (todo.id === id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ items });
    }

    handleAdd(title){
        let todo = {
            id: this.nextId(),
            title,
            completed: false
        };
        let items = [...this.state.items, todo];
         this.setState({ items });
    }

    handleDelete(id){
        let items = this.state.items.filter(todo => todo.id !== id);
        this.setState({ items });

    }

    render(){
    return (
    <main>
        <Header title="TODO List" items={this.state.items} />
        
       <section className="todo-list">
            {this.state.items.map(todo => 
                <Todo 
                        key={todo.id}
                        id={todo.id} 
                        title={todo.title} 
                        completed={todo.completed} 
                        onStatusChange={this.handleStatusChange} 
                        onDelete={this.handleDelete}
                />)
            }
        </section>     
        <Form onAdd={this.handleAdd} />
    </main >
    );

    }
}


TodoApp.propTypes ={
    title: React.PropTypes.string,
    initialData: React.PropTypes.arrayOf(React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        title: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })).isRequired
};

const render = () => ReactDOM.render(
  <TodoApp initialData={items}  />, document.getElementById('container'));

render();