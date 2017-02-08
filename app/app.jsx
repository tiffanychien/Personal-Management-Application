var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var BudgetApp = require('BudgetApp');
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
var BudgetAPI = require('BudgetAPI');

store.subscribe(() => {
  var state = store.getState();
  console.log('New state', state);
  // BudgetAPI.setStatus(state.status);
  BudgetAPI.setStatus(state.status);
  BudgetAPI.setPercentages(state.percentages);
  BudgetAPI.setIncome(state.incomeItems);
  BudgetAPI.setExpenses(state.expensesItems);
  TodoAPI.setTodos(state.todos);
});

// var initialStatus = BudgetAPI.getStatus();
// store.dispatch(actions.UpdateStatus(initialStatus));
var initialStatus = BudgetAPI.getStatus();
var initialPercentages = BudgetAPI.getPercentages();
var initialIncome = BudgetAPI.getIncome();
var initialExpenses = BudgetAPI.getExpenses();
var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.UpdateStatus(initialStatus));
store.dispatch(actions.AddPercentages(initialPercentages));
store.dispatch(actions.AddIncomeItems(initialIncome));
store.dispatch(actions.AddExpensesItems(initialExpenses));
store.dispatch(actions.addTodos(initialTodos));

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <BudgetApp/>
  </Provider>,
  document.getElementById('app')
);
