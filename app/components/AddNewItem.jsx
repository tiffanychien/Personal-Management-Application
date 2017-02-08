var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddNewItem = React.createClass({
  getInitialState: function () {
    return {
      button: 'Earned'
    };
  },
  updateIncome: function(description, value) {
    var {dispatch, status} = this.props;
    var newID, newTotalIncome, newTotalPercentage, newBudget;
    //1. Add an new income item
    newID = status.incomeID + 1;
    //dispatch(actions.updateIncomeID(newID));
    dispatch(actions.AddIncome(newID, description, value));
    //2. update totalIncome, incomeID, totalpercentage, budget
    newTotalIncome = Number(status.totalIncome) + Number(value);
    newBudget = newTotalIncome - status.totalExpenses;
    if (newTotalIncome !==  0) {
      newTotalPercentage = Math.round((status.totalExpenses/newTotalIncome)*100);
    } else {
      newTotalPercentage = '---';
    }
    dispatch(actions.updateIncomeStatus(newID, newTotalIncome, newTotalPercentage, newBudget));
  },
  updateExpenses: function(description, value) {
    var {dispatch, status} = this.props;
    var newID, newTotalExpenses, newTotalPercentage, newBudget, newPercentage;
    //1. Add an new expenses item
    newID = status.expensesID + 1;
    //dispatch(actions.updateExpensesID(newID));
    dispatch(actions.AddExpenses(newID, description, value));
    //2. update totalExpenses, expensesID, totalpercentage, budget
    newTotalExpenses = Number(status.totalExpenses) + Number(value);
    newBudget = status.totalIncome - newTotalExpenses;
    if (status.totalIncome !==  0) {
      newTotalPercentage = Math.round((newTotalExpenses/status.totalIncome)*100);
      newPercentage = Math.round((value/status.totalIncome)*100);
    } else {
      newTotalPercentage = '---';
      newPercentage = '---';
    }
    dispatch(actions.updateExpenseStatus(newID, newTotalExpenses, newTotalPercentage, newBudget));
    dispatch(actions.AddExpensesPercentage(newPercentage));
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var type = this.refs.type.value;
    var description = this.refs.description.value;
    var value = this.refs.money.value;

    if (description.length > 0) {
      this.refs.description.value = '';
      this.refs.money.value = '';
      if (type === 'inc') {
        this.updateIncome(description, value);
        // newID = status.incomeID + 1;
        // dispatch(actions.updateIncomeID(newID));
        // dispatch(actions.AddIncome(newID, description, value));
      } else if (type === 'exp') {
        this.updateExpenses(description, value);
      }
    } else {
      this.refs.description.focus();
    }
  },
  handleSelect: function (e) {
    var type = e.target.value;

    if (type === 'inc') {
      this.setState({button: 'Earned'});
    } else if (type === 'exp') {
      this.setState({button: 'Spent'});
    }
  },
  render: function () {
    return (
      <div className="add">
        <div className="add__container">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <select className="add__type columns" id="select_type"ref="type" onChange={this.handleSelect}>
                <option value="inc" defaultValue>+</option>
                <option value="exp">-</option>
              </select>
              <input type="text" ref="description" className="add__description columns" placeholder="Add description"/>
              <input type="number" ref="money" className="add__value columns" placeholder="Value"/>
              <button className="button">{this.state.button}</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(AddNewItem);
