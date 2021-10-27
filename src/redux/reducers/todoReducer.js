function getId(todos) {
    return (
      todos.reduce((maxId, todo) => {
        return Math.max(todo.id, maxId);
      }, -1) + 1
    );
  }
  
  let todoReducer = function (state = {}, action) {
    let todos = state.todos || [];
  
    switch (action.type) {
      case 'ADD_TODO':
        todos = [
          {
            text: action.text,
            completed: false,
            id: getId(todos),
          },
          ...todos,
        ];
        break;
      case 'COMPLETE_TODO':
        console.log('completed', todos);
        todos = todos.map((todo) => {
          return todo.id === action.id
            ? Object.assign({}, todo, { completed: !todo.completed })
            : todo;
        });
        console.log('After completed', todos);
        break;
      case 'DELETE_TODO':
        todos.forEach((item) => {
          if (item.id === action.id) {
            todos.splice(item, 1);
          }
        });
        todos = [...todos];
        break;
    }
  
    return Object.assign({}, state, { todos });
  };
  
  export default todoReducer;
  