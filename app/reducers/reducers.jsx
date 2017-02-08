var BudgetAPI = require('BudgetAPI');
var uuid = require('node-uuid');
var moment = require('moment');
//Todo App
export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state;
    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ];
    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id === action.id) {
          var nextCompleted = !todo.completed;

          return {
            ...todo,
            completed: nextCompleted,
            completedAt: nextCompleted ? moment().unix() : undefined
          };
        } else {
          return todo;
        }
      });
    case 'ADD_TODOS':
      return [
        ...state,
        ...action.todos
      ];
    default:
      return state;
  }
};

//Budget App
var defaultStatus = {
  month: moment().format('MMMM, YYYY'),
  budget: 0,
  totalIncome: 0,
  totalExpenses: 0,
  totalPercentage: 0,
  incomeID: 0,
  expensesID: 0
};
//remove the localStorage status and check if we need this default value
export var statusReducer = (state = defaultStatus, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS':
      return action.status;
    case 'ADD_TOTAL_INCOME':
      return {
        ...state,
        totalIncome: action.totalIncome
      };
    case 'UPDATE_INCOME_STATUS':
      return {
        ...state,
        incomeID: action.incomeID,
        totalIncome: action.totalIncome,
        totalPercentage: action.totalPercentage,
        budget: action.budget
      };
    case 'UPDATE_EXPENSES_STATUS':
      return {
        ...state,
        expensesID: action.expensesID,
        totalExpenses: action.totalExpenses,
        totalPercentage: action.totalPercentage,
        budget: action.budget
      };

  //   case 'SUBSTRACT_INCOME_TOTAL':
  //     return [
  //       ...state,
  //       totalIncome: action.value
  //     ];
  //   case 'ADD_EXPENSES_TOTAL':
  //     return [
  //       ...state,
  //       totalExpenses: action.value
  //     ];
  //   case 'SUBSTRACT_EXPENSES_TOTAL':
  //     return [
  //       ...state,
  //       totalExpenses: action.value
  //     ];
  //   case 'CALCULATE_PERCENTAGE':
  //     return [
  //       ...state,
  //       totalPercentage: action.totalPercentage
  //     ];
  // case 'GET_INCOME_ID':
  //   return [
  //     ...state,
  //     incomeID: action.incomeID
  //   ];
  //   case 'GET_EXPENSES_ID':
  //     return [
  //       ...state,
  //       expensesID: action.expensesID
  //     ];
    default:
      return state;
  }
};

export var incomeReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_INCOME_ITEM':
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
          value: action.value,
          date: moment().unix()
        }
      ];
    case 'DELETE_INCOME':
      return state.filter((income) => income.id !== action.id);
      //return state.map((income) => (income.id !== action.id));
    case 'ADD_INCOME_ITEMS':
      return [
        ...state,
        ...action.incomeItems
      ];
    default:
      return state;
  }
};

export var expensesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSES_ITEM':
      return [
        ...state,
        {
          id: action.id,
          description: action.description,
          value: action.value,
          date: moment().unix()
        }
      ];
    case 'DELETE_EXPENSES':
      return state.filter((expenses) => expenses.id !== action.id);
    case 'ADD_EXPENSES_ITEMS':
      return [
        ...state,
        ...action.expensesItems
      ];
    default:
      return state;
  }
};

export var percentageReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXPENSES_PERCENTAGE':
      return [
        ...state,
        action.percentage
      ];
    case 'ADD_PERCENTAGES':
      return [
        ...state,
        ...action.percentages
      ];
    default:
    return state;
  }
};
