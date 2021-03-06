import React, { Component } from 'react';
import CreateForm from './components/CreateForm';
import TodoLIst from './components/TodoList';

import './App.css';

// 함수를 선언후 바로 호출하는, IIFE 패턴
// const bulkTodos = (() => {
//   const array = [];
//   for (let i = 0; i < 5000; i++) {
//     array.push({
//       id: i,
//       text: `Todo #${i}`,
//       checked: false
//     });
//   }
//   return array;
// })();

class App extends Component {
  id = 3;

  // state 의 초깃값을 설정합니다.
  state = {
    // 그 초깃값은 배열 형태로 넣어주었고, 내부에 기본 값들을 넣어주었습니다.
    todos: [
      {
        id: 0,
        text: '앵귤러 배우고',
        checked: true
      },
      {
        id: 1,
        text: '리액트 배우고',
        checked: false
      },
      {
        id: 2,
        text: '뷰 배우자',
        checked: false
      }
    ]
  };

  // id = 5000;
  // state = {
  //   todos: bulkTodos
  // };

  handleCreate = text => {
    const todoData = {
      id: this.id++,
      text,
      checked: false
    };

    // 데이터를 등록
    this.setState({
      todos: this.state.todos.concat(todoData)
    });
  };

  handleCheck = id => {
    const nextTodos = this.state.todos.map(todo => {
      if(todo.id === id )
        return { ...todo, checked: !todo.checked };
      return todo;
    });

    this.setState({
      todos: nextTodos
    });
  };

  handleRemove = id => {
    // 이것도 이렇게 할 수 있음..
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== id)
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>오늘 뭐할까?</h1>
        </div>
        <CreateForm onSubmit={this.handleCreate} />
        <div className="white-box">
          <TodoLIst todos={this.state.todos}  onCheck={this.handleCheck} onRemove={this.handleRemove} />
        </div>
      </div>
    );
  }
}

export default App;