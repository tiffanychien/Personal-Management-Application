var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Income = React.createClass({
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
    var {id, description, value, date, dispatch} = this.props;

    return (
      <div className="item clearfix" id="income-{id}">
        <div className="item__description">
          <span className="todo__subtext">{moment.unix(date).format('MM/DD HH:mm')}</span>
          &nbsp;&nbsp;{description}
        </div>
        <div className="right clearfix">
          <div className="item__value">+ {this.formatNumber(value)}</div>
          <div className="item__delete" onClick={() => {
              dispatch(actions.DeleteIncome(id));
              this.props.onDeleteIncome(value);
            }}>
            <button className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
          </div>
        </div>
      </div>
    )
  }
});

export default connect()(Income);
