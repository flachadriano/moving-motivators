import React from 'react';

module.exports = React.createClass({
  propTypes: {
    onSend: React.PropTypes.func,
  },
  onClick() {
    this.props.onSend('yolo');
  },
  render() {
    return (
      <div className="form-container">
        <div onClick={this.onClick}>Console.Log Results</div>
      </div>
      );
  },
});
