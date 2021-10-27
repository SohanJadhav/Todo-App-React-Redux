import React, { Component } from 'react';

export class TodoInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputText: '',
    };
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { inputText } = this.state;
    if (inputText && inputText.length) this.props.addTodo(this.state.inputText);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Type in your todo"
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
          />
          <input type="submit" text="Submit" />
        </form>
      </div>
    );
  }
}

export class TodoItem extends Component {
  handleComplete() {
    this.doAction('complete');
  }

  handleDelete() {
    this.doAction('delete');
  }

  doAction(action) {
    if (action === 'complete') {
      this.props.actions.completeTodo(this.props.todo.id);
    } else {
      this.props.actions.deleteTodo(this.props.todo.id);
    }
  }

  render() {
    return (
      <li>
        {this.props.todo.completed ? (
          <div style={{ color: 'green' }}>{this.props.todo.text}</div>
        ) : (
          <div style={{ color: 'black' }}>{this.props.todo.text}</div>
        )}
        <button onClick={this.handleComplete.bind(this)}>
          Mark as completed
        </button>
        <button onClick={this.handleDelete.bind(this)}>Delete todo</button>
      </li>
    );
  }
}

export class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              todo={todo}
              actions={this.props.actions}
            />
          );
        })}
      </ul>
    );
  }
}
