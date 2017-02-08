var React = require('react');
var {connect} = require('react-redux');
var $ = require('jquery');
var moment = require('moment');
var TodoApp = require('TodoApp');

import IncomeList from 'IncomeList';
import ExpensesList from 'ExpensesList';
import AddNewItem from 'AddNewItem';


var BudgetApp = React.createClass({
  formatNumber: function(num) {
        var numSplit, int, dec;

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3); //input 23510, output 23,510
        }

        dec = numSplit[1];

        return int + '.' + dec;

  },
  render: function () {
    var {status} = this.props;
    console.log('BudgetApp Status: ', status);
    // console.log($.isArray(status));
    // console.log('Status other components: ', status[0].totalIncome);
    return (
      <div>
      <div className="row">

      <div className="large-8 columns">
        <div className="top">
          <div className="budget">
            <div className="budget__title">
              Available Budget in <span className="budget__title--month">{status.month}</span>:
            </div>

            <div className="budget__value">+ {this.formatNumber(status.budget)}</div>

            <div className="budget__income clearfix">
              <div className="budget__income--text">Income</div>
              <div className="right">
                  <div className="budget__income--value">+ {this.formatNumber(status.totalIncome)}</div>
                  <div className="budget__income--percentage">&nbsp;</div>
              </div>
            </div>

            <div className="budget__expenses clearfix">
              <div className="budget__expenses--text">Expenses</div>
              <div className="right clearfix">
                  <div className="budget__expenses--value">- {this.formatNumber(status.totalExpenses)}</div>
                  <div className="budget__expenses--percentage">{status.totalPercentage}%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <AddNewItem />
          <div className="container2 clearfix">
            <IncomeList />
            <ExpensesList />
          </div>
        </div>
      </div>
      <TodoApp />
    </div>
    </div>
    )
  }
});

//module.exports = BudgetApp;

module.exports = connect(
  (state) => {
    return {
      status: state.status
    };
  }
)(BudgetApp);
