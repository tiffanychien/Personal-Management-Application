var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import Expenses from 'Expenses';
var BudgetAPI = require('BudgetAPI');

export var ExpensesList = React.createClass({
  updateExpenses: function(value) {
    var {dispatch, status} = this.props;
    var newTotalExpenses, newTotalPercentage, newBudget;

    newTotalExpenses = Number(status.totalExpenses) - Number(value);
    newBudget = status.totalIncome - newTotalExpenses;
    if (status.totalIncome !==  0) {
      newTotalPercentage = Math.round((newTotalExpenses/status.totalIncome)*100);
    } else {
      newTotalPercentage = '---';
    }
    dispatch(actions.updateExpenseStatus(status.expensesID, newTotalExpenses, newTotalPercentage, newBudget));
  },
  render: function () {
    var {expensesItems, percentages} = this.props;
    var renderTodos = () => {
      return expensesItems.map((expenses) => {
        return (
          <Expenses key={expenses.id} {...expenses} onPercentage = {percentages[expenses.id-1]} onDeleteExpense = {this.updateExpenses}/>
        );
      });
    };

    return (
      <div className="expenses">
        <h2 className="expenses__title">Expenses</h2>

        <div className="expenses__list">
        {renderTodos()}
        </div>
      </div>
    )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ExpensesList);
