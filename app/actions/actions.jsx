//Todo App
export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};

export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export var addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text
  };
};

export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export var toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

//Status List
export var UpdateStatus = (status) => {
  return {
    type: 'UPDATE_STATUS',
    status
  };
};
export var AddTotalIncome = (totalIncome) => {
  return {
    type: 'ADD_TOTAL_INCOME',
    totalIncome
  };
};
export var updateIncomeStatus = (incomeID, totalIncome, totalPercentage, budget) => {
  return {
    type: 'UPDATE_INCOME_STATUS',
    incomeID,
    totalIncome,
    totalPercentage,
    budget
  };
};
export var updateExpenseStatus = (expensesID, totalExpenses, totalPercentage, budget) => {
  return {
    type: 'UPDATE_EXPENSES_STATUS',
    expensesID,
    totalExpenses,
    totalPercentage,
    budget
  };
};
// export var SubstractIncomeTotal = (value) => {
//   return {
//     type: 'SUBSTRACT_INCOME_TOTAL',
//     value
//   };
// };

//IncomeList
export var AddIncome = (id, description, value) => {
  return {
    type: 'ADD_INCOME_ITEM',
    id,
    description,
    value
  };
};

export var AddIncomeItems = (incomeItems) => {
  return {
    type: 'ADD_INCOME_ITEMS',
    incomeItems
  };
};

export var DeleteIncome = (id) => {
  return {
    type: 'DELETE_INCOME',
    id
  };
};

//ExpensesList
export var AddExpenses = (id, description, value) => {
  return {
    type: 'ADD_EXPENSES_ITEM',
    id,
    description,
    value
  };
};

export var AddExpensesItems = (expensesItems) => {
  return {
    type: 'ADD_EXPENSES_ITEMS',
    expensesItems
  };
};

export var DeleteExpenses = (id) => {
  return {
    type: 'DELETE_EXPENSES',
    id
  };
};

export var AddExpensesPercentage = (percentage) => {
  return {
    type: 'ADD_EXPENSES_PERCENTAGE',
    percentage
  };
};

export var AddPercentages = (percentages) => {
  return {
    type: 'ADD_PERCENTAGES',
    percentages
  };
};
