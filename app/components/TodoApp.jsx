var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

var TodoApp = React.createClass({
  render: function () {
    return (
        <div className="large-4 columns">
          <h1 className="page-title">Todo List</h1>


            <div className="container1">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
        </div>
    )
  }
});

module.exports = TodoApp;
