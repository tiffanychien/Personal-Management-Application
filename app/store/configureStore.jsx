var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer, statusReducer, incomeReducer, expensesReducer, percentageReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer,
    status: statusReducer,
    incomeItems: incomeReducer,
    expensesItems: expensesReducer,
    percentages: percentageReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
