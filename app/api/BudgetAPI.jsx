var $ = require('jquery');
var moment = require('moment');

module.exports = {
  setStatus: function (status) {
    if (status !== null) {
      localStorage.setItem('status', JSON.stringify(status));
      return status;
    }
  },
  getStatus: function () {
    var stringStatus = localStorage.getItem('status');
    var status = {};
    var defaultStatus = {
      month: moment().format('MMMM, YYYY'),
      budget: 0,
      totalIncome: 0,
      totalExpenses: 0,
      totalPercentage: 0,
      incomeID: 0,
      expensesID: 0
    };

    try {
      status = JSON.parse(stringStatus);
    } catch (e) {

    }
    console.log('API status: ', status);

    if (status !== null) {
      status = {
        ...status,
        month: moment().format('MMMM, YYYY')
      };
      return status;
    } else {
      return defaultStatus;
    }
  },
  setPercentages: function (percentages) {
    if ($.isArray(percentages)) {
      localStorage.setItem('percentages', JSON.stringify(percentages));
      return percentages;
    }
  },
  getPercentages: function () {
    var stringPercentages = localStorage.getItem('percentages');
    var percentages = [];

    try {
      percentages = JSON.parse(stringPercentages);
    } catch (e) {

    }

    return $.isArray(percentages) ? percentages : [];
  },
  setIncome: function (incomeItems) {
    if ($.isArray(incomeItems)) {
      localStorage.setItem('income', JSON.stringify(incomeItems));
      return incomeItems;
    }
  },
  getIncome: function () {
    var stringIncome = localStorage.getItem('income');
    var incomeItems = [];

    try {
      incomeItems = JSON.parse(stringIncome);
    } catch (e) {

    }

    return $.isArray(incomeItems) ? incomeItems : [];
  },
  setExpenses: function (expensesItems) {
    if ($.isArray(expensesItems)) {
      localStorage.setItem('expenses', JSON.stringify(expensesItems));
      return expensesItems;
    }
  },
  getExpenses: function () {
    var stringExpenses = localStorage.getItem('expenses');
    var expensesItems = [];

    try {
      expensesItems = JSON.parse(stringExpenses);
    } catch (e) {

    }

    return $.isArray(expensesItems) ? expensesItems : [];
  }
};
