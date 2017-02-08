var React = require('react');
var {connect} = require('react-redux');
import Income from 'Income';
var BudgetAPI = require('BudgetAPI');

export var IncomeList = React.createClass({
  updateIncome: function(value) {
    var {dispatch, status} = this.props;
    var newTotalIncome, newTotalPercentage, newBudget;



    newTotalIncome = Number(status.totalIncome) - Number(value);
    newBudget = newTotalIncome - status.totalExpenses;
    if (newTotalIncome !==  0) {
      newTotalPercentage = Math.round((status.totalExpenses/newTotalIncome)*100);
    } else {
      newTotalPercentage = '---';
    }
    dispatch(actions.updateIncomeStatus(status.incomeID, newTotalIncome, newTotalPercentage, newBudget));
  },
  render: function () {

    var {incomeItems} = this.props;
    var renderTodos = () => {
      return incomeItems.map((income) => {
        return (
          <Income key={income.id} {...income} onDeleteIncome = {this.updateIncome}/>
        );
      });
    };

    return (
      <div className="income">
        <h2 className="icome__title">Income</h2>

        <div className="income__list">
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
)(IncomeList);
